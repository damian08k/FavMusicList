import "./assets/styles/global.module.css";
import "./assets/styles/variables.module.css";
import { AppView } from "./components/AppView/AppView";
import { AlbumsListProvider } from "./context/albumsList.context";
import { ListViewProvider } from "./context/listView.context";

export const App = () => {
  return (
    <AlbumsListProvider>
      <ListViewProvider>
        <AppView />
      </ListViewProvider>
    </AlbumsListProvider>
  );
};
