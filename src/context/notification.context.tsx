import { createContext, PropsWithChildren, useState, useContext } from "react";
import {
  NotificationContextStatus,
  NotificationContextType,
} from "../types/notification.type";

const NotificationContext = createContext<NotificationContextType>({
  status: null,
  setStatus: () => {},
});

const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<NotificationContextStatus>(null);

  const value = { status, setStatus };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useListView must be used within a ListViewProvider");
  }

  return context;
};

export { NotificationProvider, useNotification };
