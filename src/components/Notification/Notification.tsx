import { CloseIcon } from "../AddNewAlbum/components/CloseIcon/CloseIcon";
import classes from "./Notification.module.css";
import { ReactComponent as SuccessIcon } from "../../assets/icons/success.svg";
import {
  NotificationStatus,
  NotificationType,
} from "../../types/notification.type";

interface NotificationProps {
  status: NotificationStatus;
}

const notificationContent: NotificationType = {
  error: {
    icon: <CloseIcon isNotification />,
    text: "Album title should contain minimum 2 characters!",
  },
  success: {
    icon: <SuccessIcon />,
    text: "Album added successfully! You can close form or add new album!",
  },
};

export const Notification = ({ status }: NotificationProps) => {
  return (
    <div className={`${classes.root} ${classes[status]}`}>
      <div className={classes.notificationIcon}>
        {notificationContent[status].icon}
      </div>
      <h3 className={classes.notificationText}>
        {notificationContent[status].text}
      </h3>
    </div>
  );
};
