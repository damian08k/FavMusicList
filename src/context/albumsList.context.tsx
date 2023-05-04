import {
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
} from "react";
import {
  AlbumsState,
  AlbumsActions,
  AlbumsListContextModel,
} from "../types/albums.type";

const defaultAlbumsState: AlbumsState = {
  albums: [],
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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AlbumsListProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(albumsReducer, defaultAlbumsState);

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
