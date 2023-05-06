import classes from "./ListView.module.css";
import { ReactComponent as GridViewIcon } from "../../../../assets/icons/grid.svg";
import { ListIcon } from "./components/ListIcon/ListIcon";
import { useListView } from "../../../../context/listView.context";
import { useTranslation } from "react-i18next";

export const ListView = () => {
  const { listView, setListView } = useListView();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <button
        className={classes.viewButton}
        aria-label={`${t("Display list in list view")}`}
        onClick={() => setListView("list")}
      >
        <ListIcon />
      </button>
      <button
        className={classes.viewButton}
        aria-label={`${t("Display list in grid view")}`}
        onClick={() => setListView("grid")}
      >
        <GridViewIcon
          className={`${classes.gridIcon} ${
            listView === "list" && classes.grayedOut
          }`}
        />
      </button>
    </div>
  );
};
