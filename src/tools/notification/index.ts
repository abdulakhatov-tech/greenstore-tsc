import { useEffect } from "react";
import { notification } from "antd";
import { closeNotification } from "@redux/slices/notification";
import { RootState } from "@redux/store";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { NotificationPropsI, NotificationTypeT } from "@type/index";

const Notification = () => {
  const dispatch = useAppDispatch();
  const { type, message, description } = useAppSelector(
    (state: RootState): NotificationPropsI => state.notification as NotificationPropsI
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
      openNotificationWithIcon(type as NotificationTypeT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, message, description]);

  return contextHolder
};

export default Notification;
