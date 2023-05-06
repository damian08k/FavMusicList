import { CloseIcon } from "../AddNewAlbum/components/CloseIcon/CloseIcon";
import classes from "./Notification.module.css";
import { ReactComponent as SuccessIcon } from "../../assets/icons/success.svg";
import {
  NotificationStatus,
  NotificationType,
} from "../../types/notification.type";
import { useTranslation } from "react-i18next";
import { ALBUMS } from "../../testIds";

interface NotificationProps {
  status: NotificationStatus;
}

const notificationContent: NotificationType = {
  error: {
    icon: <CloseIcon isNotification />,
    text: "Album title should contain minimum 2 characters!",
    testId: ALBUMS.NOTIFICATION_ERROR,
  },
  success: {
    icon: <SuccessIcon />,
    text: "Album added successfully! You can close form or add new album!",
    testId: ALBUMS.NOTIFICATION_SUCCESS,
  },
};

export const Notification = ({ status }: NotificationProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${classes.root} ${classes[status]}`}
      data-testId={notificationContent[status].testId}
    >
      <div className={classes.notificationIcon}>
        {notificationContent[status].icon}
      </div>
      <h3 className={classes.notificationText}>
        {t(notificationContent[status].text)}
      </h3>
    </div>
  );
};
