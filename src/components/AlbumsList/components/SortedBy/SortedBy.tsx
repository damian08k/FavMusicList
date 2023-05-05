import { ChangeEvent, useEffect, useState } from "react";

import classes from "./SortedBy.module.css";
import { sortingOptions } from "./data/sortingOptions";
import { useAlbums } from "../../../../context/albumsList.context";
import { SortingValues } from "../../../../types/sortingOptions.type";
import { SELECTED_STORAGE_KEY } from "../../../../contants";

export const SortedBy = () => {
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem(SELECTED_STORAGE_KEY) ?? "id"
  );
  const { dispatch } = useAlbums();

  const handleOnChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = evt.target.value as SortingValues;

    dispatch({ type: "SORTING", payload: selectedOption });
    setSelectedValue(selectedOption);
  };

  useEffect(() => {
    localStorage.setItem(SELECTED_STORAGE_KEY, selectedValue);
  }, [selectedValue]);

  return (
    <div className={classes.root}>
      <p className={classes.sortedByText}>Sorted by:</p>
      <select
        className={classes.selectElement}
        onChange={handleOnChange}
        value={selectedValue}
      >
        {sortingOptions.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
