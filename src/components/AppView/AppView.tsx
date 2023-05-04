import { ReactComponent as AppLogo } from "../../assets/logo/logo.svg";
import { AddNewAlbumButton } from "../AddNewAlbumButton/AddNewAlbumButton";
import classes from "./AppView.module.css";

export const AppView = () => {
  return (
    <div className={classes.root}>
      <header>
        <div className={classes.logo}>
          <AppLogo />
        </div>
      </header>
      <main className={classes.mainContent}>
        <AddNewAlbumButton />
      </main>
    </div>
  );
};
