import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";

import Tooltip from "@tools/tooltip";
import Button from "@generic/button";
import { useAuth } from "@config/auth";
import CustomSkeleton from "@tools/skeleton";
import useUsersService from "@services/users";
import useOnlineStatus from "@hooks/useOnlineStatus";
import "./style.css";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { user } = useUsersService();
  const { getUser } = useAuth();
  const navigate = useNavigate();

  const { isLoading, isError, data: author } = user;

  const loading = isLoading || isError || !isOnline;
  const isFollowing = author?.followers?.includes(getUser()?.user?._id);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-4">
        {loading ? (
          <CustomSkeleton
            type="image"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
            className="avatar-skeleton"
            active
          />
        ) : (
          <Tooltip
            title={`${t("blog.view")} ${author?.name} ${author?.surname}'s profile`}
          >
            <Avatar
              src={author?.profile_photo}
              alt={`${author?.name} ${author?.surname}`}
              className="w-[50px] h-[50px] object-cover"
              onClick={() => navigate(`/user/${author?._id}`)}
            />
          </Tooltip>
        )}

        <div className="flex flex-col gap-2">
          {loading ? (
            <CustomSkeleton type="input" className="name-skeleton" active />
          ) : (
            <h2 className="text-[18px] font-bold text-black leading-4">
              {`${author?.name} ${author?.surname}`}
            </h2>
          )}

          {loading ? (
            <CustomSkeleton
              type="input"
              active
              className="followers-skeleton"
            />
          ) : (
            <p className="text-[14px] font-normal text-black flex items-center gap-2">
              {t("blog.followers")}: {author?.followers?.length ?? 0}
            </p>
          )}
        </div>
      </div>
      <Button variant="primary" disabled={loading}>
        {t(`blog.${isFollowing ? "unfollow" : "follow"}`)}
      </Button>
    </div>
  );
};

export default Header;
