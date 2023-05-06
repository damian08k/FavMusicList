import { useState } from "react";
import { ReactComponent as AppLogo } from "../../assets/logo/logo.svg";
import { AddNewAlbum } from "../AddNewAlbum/AddNewAlbum";
import { AddNewAlbumButton } from "../AddNewAlbumButton/AddNewAlbumButton";
import { AlbumsList } from "../AlbumsList/AlbumsList";
import classes from "./AppView.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const AppView = () => {
  const [isAddAlbumFormOpen, setIsAddAlbumFormOpen] = useState(false);
  const isDesktopView = useMediaQuery("(min-width: 912px)");

  const isAddAlbumButtonVisible =
    isDesktopView || (!isAddAlbumFormOpen && !isDesktopView);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <AppLogo />
        </h1>
      </header>
      <main className={classes.mainContent}>
        {isAddAlbumButtonVisible && (
          <AddNewAlbumButton onOpenForm={setIsAddAlbumFormOpen} />
        )}
        <AlbumsList />
      </main>
      {isAddAlbumFormOpen && (
        <div className={classes.modal}>
          <AddNewAlbum onOpenForm={setIsAddAlbumFormOpen} />
        </div>
      )}
      <div className={classes.languageSwitcher}>
        <LanguageSwitcher />
      </div>
    </div>
  );
};
