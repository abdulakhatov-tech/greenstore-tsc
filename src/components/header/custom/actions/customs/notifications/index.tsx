import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Empty, Popover, Tooltip } from "antd";

import { BellOutlined } from "@ant-design/icons";

import useNotificationService from "@services/notification";
import useOnlineStatus from "@hooks/useOnlineStatus";
import { AuthQuery, NotificationStackT } from "@type/index";
import useMediaQuery from "@hooks/useMediaQuery";
import Notifier from "./notifier";
import CustomSkeleton from "@tools/skeleton";
import { useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";

const Notifications: React.FC = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { isAuthed } = useAppSelector(({auth}) => auth)
  const isLargeScreen = useMediaQuery("min-width: 767px");
  const { getAllNotifications } = useNotificationService();
  const { setParam } = useSearchParamsHook();

  const { isLoading, isError, data } = getAllNotifications;
  const loading = isLoading || isError || !isOnline;

  const notificationHandler = () => {
    if (!isAuthed) {
      setParam('auth', AuthQuery.SignIn)
      return;
    }
  }

  const renderNotifications = (type: string, title: string) => {
    const notifications = data?.notification_stack?.filter(
      (notification: NotificationStackT) => notification.type === type
    );

    if (!notifications?.length) return null;

    return (
      <div>
        <h4 className='text-[16px] font-medium'>{title}:</h4>
        {notifications.map(
          (notification: NotificationStackT, index: number) => (
            <Notifier key={index} {...notification} />
          )
        )}
      </div>
    );
  };

  const content = (
    <div className='max-h-[300px] min-w-[200px] overflow-y-auto'>
      {loading ? (
        <div className='flex flex-col gap-2'>
          {
            Array.from({length: 5}).map((_:any, index: number) => <CustomSkeleton key={index} active type="input" style={{width: '250px'}} />)
          }
        </div>
      ) : !data?.notification_stack?.length ? (
        <Empty description={t("header.no_notifications")} />
      ) : (
        <div className='flex flex-col gap-2'>
          {renderNotifications("invitation_stack", t("header.invitations"))}
          {renderNotifications("follow_stack", t("header.followers"))}
        </div>
      )}
    </div>
  );

  return (
    <Popover
      content={data?.notification_stack?.length ? content : null}
      placement={isLargeScreen ? "bottomRight" : "bottom"}
      trigger='click'
    >
      <Tooltip
        color='#46A358'
        placement='left'
        title={t("header.notification")}
      >
        <Badge dot={data?.notification_stack?.length} className='notification'>
          <BellOutlined className='cursor-pointer text-[20px] md:text-[22px] hover:text-green' onClick={notificationHandler} />
        </Badge>
      </Tooltip>
    </Popover>
  );
};

export default Notifications;
