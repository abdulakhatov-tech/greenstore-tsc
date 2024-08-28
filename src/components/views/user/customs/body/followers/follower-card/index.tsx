import React from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Card, Skeleton } from "antd";
import { WechatOutlined, LinkOutlined } from "@ant-design/icons";

import useFollowerCardFeatures from "./feautes";

const FollowerCard: React.FC<{ follower: string }> = ({ follower }) => {
  const { t } = useTranslation();
  const { user, loading, chatHandler, observeHandler } =
    useFollowerCardFeatures(follower);

  return (
    <Card
      actions={[
        <div key={1} onClick={chatHandler}>
          {!loading ? (
            <Skeleton.Avatar />
          ) : (
            <>
              <WechatOutlined /> {t("user.chat")}
            </>
          )}
        </div>,
        <div key='3' onClick={observeHandler}>
          {!loading ? (
            <Skeleton.Avatar />
          ) : (
            <>
              <LinkOutlined /> {t("user.observe")}
            </>
          )}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar src={user?.profile_photo} />}
        title={
          <div>
            {!loading ? <Skeleton.Input /> : `${user?.name} ${user?.surname}`}
          </div>
        }
      />
    </Card>
  );
};

export default FollowerCard;
