import classes from "./AddNewAlbumButton.module.css";
import { PlusIcon } from "./components/PlusIcon/PlusIcon";

export const AddNewAlbumButton = () => {
  return (
    <button className={classes.root}>
      <PlusIcon />
      <span className={classes.buttonText}>Add new album</span>
    </button>
  );
};
