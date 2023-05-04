import classes from "./Album.module.css";
import { ReactComponent as StarIcon } from "../../../../../../assets/icons/star.svg";
import { ReactComponent as BinIcon } from "../../../../../../assets/icons/bin.svg";

export const Album = () => {
  return (
    // TODO: in data-display add condition with selected display option
    <div className={classes.root} data-display={"list"}>
      <p className={classes.albumName}>Music for studying</p>
      <div className={classes.buttons}>
        <button
          className={classes.albumButton}
          aria-label="Mark album as best of the best"
        >
          <StarIcon className={classes.starIcon} />
        </button>
        <button
          className={classes.albumButton}
          aria-label="Remove album from list"
        >
          <BinIcon className={classes.binIcon} />
        </button>
      </div>
    </div>
  );
};
