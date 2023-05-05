import { useAlbums } from "../../../../context/albumsList.context";
import { useListView } from "../../../../context/listView.context";
import classes from "./Albums.module.css";
import { Album } from "./components/Album/Album";

export const Albums = () => {
  const { listView } = useListView();
  const {
    state: { albums },
  } = useAlbums();

  return (
    <div className={`${classes.root} ${classes[listView]}`}>
      {albums.length > 0 ? (
        albums.map((album) => {
          return <Album key={album.id} />;
        })
      ) : (
        <h2 className={classes.emptyList}>Empty albums list</h2>
      )}
    </div>
  );
};
