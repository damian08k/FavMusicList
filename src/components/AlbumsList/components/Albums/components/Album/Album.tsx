import classes from "./Album.module.css";
import { ReactComponent as StarIcon } from "../../../../../../assets/icons/star.svg";
import { ReactComponent as BinIcon } from "../../../../../../assets/icons/bin.svg";
import { useListView } from "../../../../../../context/listView.context";
import { useAlbums } from "../../../../../../context/albumsList.context";

interface AlbumProps {
  id: number;
  name: string;
  isTheBest: boolean;
}

export const Album = ({ id, name, isTheBest }: AlbumProps) => {
  const { listView } = useListView();
  const { dispatch } = useAlbums();

  return (
    <div className={classes.root} data-display={listView}>
      <p className={classes.albumName}>{name}</p>
      <div className={classes.buttons}>
        <button
          className={classes.albumButton}
          aria-label="Mark album as best of the best"
          onClick={() => dispatch({ type: "MARK", payload: id })}
        >
          <StarIcon
            className={`${classes.starIcon} ${isTheBest && classes.theBest}`}
          />
        </button>
        <button
          className={classes.albumButton}
          aria-label="Remove album from list"
          onClick={() => dispatch({ type: "REMOVE_ALBUM", payload: id })}
        >
          <BinIcon className={classes.binIcon} />
        </button>
      </div>
    </div>
  );
};
