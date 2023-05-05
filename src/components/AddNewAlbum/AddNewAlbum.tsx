import { Dispatch, SetStateAction, useState, ChangeEvent } from "react";

import classes from "./AddNewAlbum.module.css";
import { CloseIcon } from "./components/CloseIcon/CloseIcon";
import { useAlbums } from "../../context/albumsList.context";
import { Notification } from "../Notification/Notification";
import { useNotification } from "../../context/notification.context";
import {
  ALBUM_TITLE_MIN_LENGTH,
  HIDE_NOTIFICATION_TIMEOUT,
} from "../../contants";

interface AddNewAlbumProps {
  onOpenForm: Dispatch<SetStateAction<boolean>>;
}

export const AddNewAlbum = ({ onOpenForm }: AddNewAlbumProps) => {
  const [albumTitle, setAlbumTitle] = useState("");
  const { dispatch } = useAlbums();
  const { status, setStatus } = useNotification();

  const handleAlbumTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setAlbumTitle(evt.target.value);
  };

  const handleAddNewAlbum = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (albumTitle.length < ALBUM_TITLE_MIN_LENGTH) {
      setStatus("error");
      return;
    }

    setStatus("success");
    dispatch({
      type: "ADD_ALBUM",
      payload: {
        id: Date.now(),
        name: albumTitle,
        createdAt: new Date().getTime(),
        isTheBest: false,
      },
    });
    setAlbumTitle("");

    setTimeout(() => {
      setStatus(null);
    }, HIDE_NOTIFICATION_TIMEOUT);
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.root}>
        <div className={classes.topPanel}>
          <h2 className={classes.addNewAlbumText}>Add new album</h2>
          <div className={classes.buttonContainer}>
            <button
              className={classes.closeAddingAlbumButton}
              aria-label="Close adding new album form"
              onClick={() => onOpenForm(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        {status && <Notification status={status} />}
        <form className={classes.addNewAlbumForm} onSubmit={handleAddNewAlbum}>
          <input
            type="text"
            value={albumTitle}
            placeholder="Title"
            className={classes.titleInput}
            onChange={handleAlbumTitle}
          />
          <button type="submit" className={classes.addNewAlbumButton}>
            Add album
          </button>
        </form>
      </div>
    </div>
  );
};
