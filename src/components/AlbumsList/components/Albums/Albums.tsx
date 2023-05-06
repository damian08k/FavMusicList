import { useAlbums } from "../../../../context/albumsList.context";
import { useListView } from "../../../../context/listView.context";
import classes from "./Albums.module.css";
import { Album } from "./components/Album/Album";
import { useTranslation } from "react-i18next";

export const Albums = () => {
  const { listView } = useListView();
  const {
    state: { albums },
  } = useAlbums();
  const { t } = useTranslation();
  return (
    <ul className={`${classes.root} ${classes[listView]}`}>
      {albums.length > 0 ? (
        albums.map(({ id, name, isTheBest }) => {
          return <Album key={id} name={name} id={id} isTheBest={isTheBest} />;
        })
      ) : (
        <h2 className={classes.emptyList}>{t("Empty albums list")}</h2>
      )}
    </ul>
  );
};
