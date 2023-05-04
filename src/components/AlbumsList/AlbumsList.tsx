import classes from "./AlbumsList.module.css";
import { Albums } from "./components/Albums/Albums";
import { ListView } from "./components/ListView/ListView";
import { SortedBy } from "./components/SortedBy/SortedBy";

export const AlbumsList = () => {
  return (
    <div className={classes.root}>
      <section className={classes.topListSection}>
        <SortedBy />
        <ListView />
      </section>
      <section className={classes.albums}>
        <Albums />
      </section>
    </div>
  );
};
