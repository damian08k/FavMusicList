import classes from "./Album.module.css";
import { ReactComponent as StarIcon } from "../../../../../../assets/icons/star.svg";
import { ReactComponent as BinIcon } from "../../../../../../assets/icons/bin.svg";
import { useListView } from "../../../../../../context/listView.context";

interface AlbumProps {
  name: string;
}

export const Album = ({ name }: AlbumProps) => {
  const { listView } = useListView();

  return (
    <div className={classes.root} data-display={listView}>
      <p className={classes.albumName}>{name}</p>
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
