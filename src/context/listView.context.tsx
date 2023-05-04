import { createContext, PropsWithChildren, useState, useContext } from "react";
import { AlbumsListView, ListViewContextType } from "../types/listView.type";

const ListViewContext = createContext<ListViewContextType>({
  listView: "list",
  setListView: () => {},
});

const ListViewProvider = ({ children }: PropsWithChildren) => {
  const [listView, setListView] = useState<AlbumsListView>("list");

  const value = { listView, setListView };

  return (
    <ListViewContext.Provider value={value}>
      {children}
    </ListViewContext.Provider>
  );
};

const useListView = () => {
  const context = useContext(ListViewContext);
  if (context === undefined) {
    throw new Error("useListView must be used within a ListViewProvider");
  }

  return context;
};

export { ListViewProvider, useListView };
