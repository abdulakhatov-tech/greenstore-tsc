import { useEffect } from "react";
import { notification } from "antd";
import { closeNotification } from "@redux/slices/notification";
import { RootState } from "@redux/store";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { NotificationState, NotificationTypeT } from "./types";

const Notification = () => {
  const dispatch = useAppDispatch();
  const { type, message, description } = useAppSelector(
    (state: RootState): NotificationState => state.notification as NotificationState
  );
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationTypeT) => {
    if (message && description) {
      api[type]({
        message,
        description,
        onClose: () => dispatch(closeNotification()),
      });
    }
  };

  useEffect(() => {
    if (type) {
      openNotificationWithIcon(type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, message, description]);

  return contextHolder
};

export default Notification;
