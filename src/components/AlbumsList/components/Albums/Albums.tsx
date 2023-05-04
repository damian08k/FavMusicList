import classes from "./Albums.module.css";
import { Album } from "./components/Album/Album";

export const Albums = () => {
  // TODO: in classes.list add condition with selected display option
  return (
    <div className={`${classes.root} ${classes.grid}`}>
      {/* //TODO: This should be change to state mapping */}
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
    </div>
  );
};
