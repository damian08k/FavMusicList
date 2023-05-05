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
        albums: state.albums.filter((album) => album.id !== action.payload),
      };
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
