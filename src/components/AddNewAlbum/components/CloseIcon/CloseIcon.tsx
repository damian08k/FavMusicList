import classes from "./CloseIcon.module.css";

interface CloseIconProps {
  isNotification?: boolean;
}

export const CloseIcon = ({ isNotification }: CloseIconProps) => {
  return (
    <span className={`${classes.root} ${isNotification && classes.error}`} />
  );
};
