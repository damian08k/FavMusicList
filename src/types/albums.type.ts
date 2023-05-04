import { Dispatch } from "react";

export interface AlbumItem {
  id: number;
  date: Date;
  name: string;
}

export interface AlbumsState {
  albums: AlbumItem[];
}

export type AlbumsActions = { type: "ADD_ALBUM"; payload: AlbumItem };

export interface AlbumsListContextModel {
  state: AlbumsState;
  dispatch: Dispatch<AlbumsActions>;
}
