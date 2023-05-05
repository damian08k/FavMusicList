import classes from "./SortedBy.module.css";
import { sortingOptions } from "./data/sortingOptions";

export const SortedBy = () => {
  return (
    <div className={classes.root}>
      <p className={classes.sortedByText}>Sorted by:</p>
      <select className={classes.selectElement}>
        {sortingOptions.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
