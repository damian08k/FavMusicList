import { Dispatch } from "react";

export interface AlbumItem {
  id: number;
  createdAt: Date;
  name: string;
  isTheBest: boolean;
}

export interface AlbumsState {
  albums: AlbumItem[];
}

export type AlbumsActions =
  | { type: "ADD_ALBUM"; payload: AlbumItem }
  | { type: "REMOVE_ALBUM"; payload: number }
  | { type: "MARK"; payload: number };

export interface AlbumsListContextModel {
  state: AlbumsState;
  dispatch: Dispatch<AlbumsActions>;
}
