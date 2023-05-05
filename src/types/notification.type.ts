import { ReactNode, Dispatch, SetStateAction } from "react";

export type NotificationStatus = "error" | "success";
export type NotificationContextStatus = NotificationStatus | null;

type NotificationElement = {
  icon: ReactNode;
  text: string;
};

export type NotificationType = {
  [key in NotificationStatus]: NotificationElement;
};

export interface NotificationContextType {
  status: NotificationContextStatus;
  setStatus: Dispatch<SetStateAction<NotificationContextStatus>>;
}
