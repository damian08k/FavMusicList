import { useListView } from "../../../../../../context/listView.context";
import classes from "./ListIcon.module.css";

export const ListIcon = () => {
  const { listView } = useListView();
  return (
    <span
      className={`${classes.root} ${listView === "grid" && classes.grayedOut}`}
    />
  );
};
