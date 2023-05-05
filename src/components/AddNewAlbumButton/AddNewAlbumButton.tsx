import { Dispatch, SetStateAction } from "react";

import classes from "./AddNewAlbumButton.module.css";
import { PlusIcon } from "./components/PlusIcon/PlusIcon";

interface AddNewAlbumButtonProps {
  onOpenForm: Dispatch<SetStateAction<boolean>>;
}

export const AddNewAlbumButton = ({ onOpenForm }: AddNewAlbumButtonProps) => {
  return (
    <button
      className={classes.root}
      aria-label="Add new album"
      onClick={() => onOpenForm(true)}
    >
      <PlusIcon />
      <span className={classes.buttonText}>Add new album</span>
    </button>
  );
};
