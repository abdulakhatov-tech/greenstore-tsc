import { Avatar, Popconfirm } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

import Tooltip from "@tools/tooltip";
import Button from "@generic/button";
import CustomSkeleton from "@tools/skeleton";
import useUsersService from "@services/users";
import useOnlineStatus from "@hooks/useOnlineStatus";
import "./style.css";
import useHeaderFeatures from "./features";
import { useAppSelector } from "@hooks/useRedux";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { getUserById } = useUsersService();
  const { authorId, blogId } = useParams();
  const { user } = useAppSelector(state => state.auth)
  const navigate = useNavigate();
  const { handleFollow, handleUnFollow, handleEdit, handleDelete, loading } =
    useHeaderFeatures();

  const { isLoading, isError, data: author } = getUserById;

  const loader = isLoading || isError || !isOnline;

  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
      <div className='flex items-center gap-4'>
        {loader ? (
          <CustomSkeleton
            type='image'
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
            className='avatar-skeleton'
            active
          />
        ) : (
          <Tooltip
            title={`${t("blog.view")} ${author?.name} ${
              author?.surname
            }'s profile`}
          >
            <Avatar
              src={author?.profile_photo}
              alt={`${author?.name} ${author?.surname}`}
              className='w-[50px] h-[50px] object-cover'
              onClick={() => navigate(`/user/${author?._id}`)}
            />
          </Tooltip>
        )}

        <div className='flex flex-col gap-2'>
          {loader ? (
            <CustomSkeleton type='input' className='name-skeleton' active />
          ) : (
            <h2 className='text-[18px] font-bold text-black leading-4'>
              {`${author?.name} ${author?.surname}`}
            </h2>
          )}

          {loader ? (
            <CustomSkeleton
              type='input'
              active
              className='followers-skeleton'
            />
          ) : (
            <p className='text-[14px] font-normal text-black flex items-center gap-2'>
              {t("blog.followers")}: {author?.followers?.length ?? 0}
            </p>
          )}
        </div>
      </div>
      {user &&
      user?.followers?.includes(authorId as string) ? (
        <Button variant='primary' disabled={loader} onClick={handleUnFollow}>
          {t(`blog.unfollow`)}
        </Button>
      ) : user?._id === String(authorId) ? (
        <div className='flex items-center gap-2'>
          <Button
            variant='default'
            style={{ padding: "8px 10px" }}
            className='text-green border-green'
            onClick={handleEdit}
          >
            <MdEdit />
          </Button>
          {user?._id === String(authorId) && (
            <Popconfirm
              title={t("blog.delete")}
              description={t("blog.sure")}
              onConfirm={() => handleDelete(blogId)}
              okText={t("blog.ok_text")}
              cancelText={t("blog.cancel_text")}
            >
              <Button
                variant='default'
                style={{
                  padding: "8px 10px",
                  color: "crimson",
                  borderColor: "crimson",
                }}
                loading={loading}
                disabled={loading}
              >
                <FaRegTrashAlt />
              </Button>
            </Popconfirm>
          )}
        </div>
      ) : (
        <Button variant='primary' disabled={loader} onClick={handleFollow}>
          {t(`blog.follow`)}
        </Button>
      )}
    </div>
  );
};

export default Header;
