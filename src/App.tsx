import "./assets/styles/global.module.css";
import "./assets/styles/variables.module.css";
import { AppView } from "./components/AppView/AppView";
import { AlbumsListProvider } from "./context/albumsList.context";
import { ListViewProvider } from "./context/listView.context";
import { NotificationProvider } from "./context/notification.context";
import { Suspense } from "react";
import classes from "./App.module.css";

export const App = () => {
  return (
    <div className={classes.root}>
      <AlbumsListProvider>
        <ListViewProvider>
          <NotificationProvider>
            <Suspense fallback="Loading">
              <AppView />
            </Suspense>
          </NotificationProvider>
        </ListViewProvider>
      </AlbumsListProvider>
    </div>
  );
};
