import classes from "./AlbumsList.module.css";
import { SortedBy } from "./components/SortedBy/SortedBy";

export const AlbumsList = () => {
  return (
    <div className={classes.root}>
      <SortedBy />
    </div>
  );
};
