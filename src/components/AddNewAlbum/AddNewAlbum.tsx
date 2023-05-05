import { Dispatch, SetStateAction } from "react";

import classes from "./AddNewAlbum.module.css";
import { CloseIcon } from "./components/CloseIcon/CloseIcon";

interface AddNewAlbumProps {
  onOpenForm: Dispatch<SetStateAction<boolean>>;
}

export const AddNewAlbum = ({ onOpenForm }: AddNewAlbumProps) => {
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
        <form className={classes.addNewAlbumForm}>
          <input
            type="text"
            placeholder="Title"
            className={classes.titleInput}
          />
          <button type="submit" className={classes.addNewAlbumButton}>
            Add album
          </button>
        </form>
      </div>
    </div>
  );
};
