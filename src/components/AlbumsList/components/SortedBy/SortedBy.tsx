import { ChangeEvent } from "react";

import classes from "./SortedBy.module.css";
import { sortingOptions } from "./data/sortingOptions";
import { useAlbums } from "../../../../context/albumsList.context";
import { SortingValues } from "../../../../types/sortingOptions.type";

export const SortedBy = () => {
  const { dispatch } = useAlbums();

  const handleOnChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SORTING", payload: evt.target.value as SortingValues });
  };

  return (
    <div className={classes.root}>
      <p className={classes.sortedByText}>Sorted by:</p>
      <select className={classes.selectElement} onChange={handleOnChange}>
        {sortingOptions.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
