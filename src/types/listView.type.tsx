import { Dispatch, SetStateAction } from "react";

export type AlbumsListView = "grid" | "list";

export interface ListViewContextType {
  listView: AlbumsListView;
  setListView: Dispatch<SetStateAction<AlbumsListView>>;
}
