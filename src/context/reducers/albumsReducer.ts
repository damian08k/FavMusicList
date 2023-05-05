import { AlbumsActions, AlbumsState } from "../../types/albums.type";

export const albumsReducer = (
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
