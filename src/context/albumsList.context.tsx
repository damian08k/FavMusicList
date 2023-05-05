import {
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
  useEffect,
} from "react";
import {
  AlbumsState,
  AlbumsActions,
  AlbumsListContextModel,
} from "../types/albums.type";

const defaultAlbumsState: AlbumsState = {
  albums: [],
};

const getInitialState = () => {
  const albums = localStorage.getItem("albums");

  return albums ? { albums: JSON.parse(albums) } : defaultAlbumsState;
};

const AlbumsListContext = createContext({} as AlbumsListContextModel);

const albumsReducer = (
  state: AlbumsState,
  action: AlbumsActions
): AlbumsState => {
  switch (action.type) {
    case "ADD_ALBUM": {
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };
    }
    case "REMOVE_ALBUM": {
      return {
        ...state,
        albums: state.albums.filter(({ id }) => id !== action.payload),
      };
    }
    case "MARK": {
      const newState = state.albums.map((album) => {
        if (album.id === action.payload) {
          return {
            ...album,
            isTheBest: !album.isTheBest,
          };
        }

        return album;
      });

      return { albums: [...newState] };
    }
    case "SORTING": {
      const stateCopy = [...state.albums];
      if (action.payload === "id") {
        // Sorting from oldest to newest
        const sortedState = stateCopy.sort((a, b) => a.id - b.id);
        return { albums: [...sortedState] };
      }

      if (action.payload === "name") {
        const sortedState = stateCopy.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        return { albums: [...sortedState] };
      }

      if (action.payload === "date") {
        // Sorting from newest to oldest
        const sortedState = stateCopy.sort((a, b) => {
          return b.createdAt - a.createdAt;
        });

        return { albums: [...sortedState] };
      }
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const AlbumsListProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(albumsReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(state.albums));
  });

  const value = { state, dispatch };

  return (
    <AlbumsListContext.Provider value={value}>
      {children}
    </AlbumsListContext.Provider>
  );
};

const useAlbums = () => {
  const context = useContext(AlbumsListContext);
  if (context === undefined) {
    throw new Error("useAlbums must be used within a AlbumsListProvider");
  }

  return context;
};

export { AlbumsListProvider, useAlbums };
