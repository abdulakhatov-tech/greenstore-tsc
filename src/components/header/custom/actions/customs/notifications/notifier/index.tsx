import React from "react";
import { useTranslation } from "react-i18next";

import { UserOutlined, SendOutlined } from "@ant-design/icons";

import { NotificationStackT } from "@type/index";
import { formatTime } from "@helpers/index";
import useNotifierFeatures from "./feautes";

const Notifier: React.FC<NotificationStackT> = ({
  type,
  message,
  user_id,
  time_stamp,
}) => {
  const { t } = useTranslation();
  const { loading, user, goToUserProfileHandler } = useNotifierFeatures(
    user_id!
  );

  const renderIconOrImage = () => {
    if (loading) {
      return type === "follow_stack" ? <UserOutlined /> : <SendOutlined />;
    }
    return (
      <img
        src={user?.profile_photo}
        alt={`${user?.name} ${user?.surname}`}
        className='w-full h-full object-cover'
      />
    );
  };

  return (
    <div className='flex items-center gap-2 border-b border-b-[#e5e5e5] mt-[5px] pb-[5px] mx-[10px]'>
      <div
        className='flex justify-center items-center w-[39px] h-[34px] rounded-full overflow-hidden bg-[#45A358] text-white'
        onClick={goToUserProfileHandler}
      >
        {renderIconOrImage()}
      </div>
      <div className='w-full'>
        <h3 className='text-bold'>
          {loading ? message : `${user?.name} ${user?.surname}`}
        </h3>
        <div className='w-full flex justify-between gap-4'>
          <p className='text-[12px] cursor-pointer text-[#45A358]'>
            {user?.followers.length} {t("user.followers")?.toLowerCase()}
          </p>
          <p className='text-[12px] cursor-pointer'>
            {formatTime(time_stamp, "MMM D, h:mm A, YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifier;
