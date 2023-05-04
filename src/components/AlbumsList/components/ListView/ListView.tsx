import classes from "./ListView.module.css";
import { ReactComponent as GridViewIcon } from "../../../../assets/icons/grid.svg";
import { ListIcon } from "./components/ListIcon/ListIcon";

export const ListView = () => {
  return (
    <div className={classes.root}>
      <button
        className={classes.viewButton}
        aria-label="Display list in list view"
      >
        <ListIcon />
      </button>
      <button
        className={classes.viewButton}
        aria-label="Display list in grid view"
      >
        <GridViewIcon />
      </button>
    </div>
  );
};
