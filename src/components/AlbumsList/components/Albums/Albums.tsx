import { useListView } from "../../../../context/listView.context";
import classes from "./Albums.module.css";
import { Album } from "./components/Album/Album";

export const Albums = () => {
  const { listView } = useListView();

  return (
    <div className={`${classes.root} ${classes[listView]}`}>
      {/* //TODO: This should be change to state mapping */}
      <Album />
    </div>
  );
};
