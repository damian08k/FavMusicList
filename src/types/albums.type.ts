import { Dispatch } from "react";
import { SortingValues } from "./sortingOptions.type";

export interface AlbumItem {
  id: number;
  createdAt: number;
  name: string;
  isTheBest: boolean;
}

export interface AlbumsState {
  albums: AlbumItem[];
}

export type AlbumsActions =
  | { type: "ADD_ALBUM"; payload: AlbumItem }
  | { type: "REMOVE_ALBUM"; payload: number }
  | { type: "MARK"; payload: number }
  | { type: "SORTING"; payload: SortingValues };

export interface AlbumsListContextModel {
  state: AlbumsState;
  dispatch: Dispatch<AlbumsActions>;
}
