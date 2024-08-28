import React from "react";
import { Image } from "antd";
import { useTranslation } from "react-i18next";

import {
  WechatOutlined,
  PlusCircleOutlined,
  MinusOutlined,
  UserOutlined,
  SendOutlined,
} from "@ant-design/icons";

import useOnlineStatus from "@hooks/useOnlineStatus";
import { useAppSelector } from "@hooks/useRedux";
import { USER_COVER_IMAGE } from "@utils/index";
import useUsersService from "@services/users";
import CustomSkeleton from "@tools/skeleton";
import useHeaderFeatures from "./features";
import Container from "@layout/container";
import Button from "@generic/button";
import "./style.css";

import noUserImage  from '@assets/images/user.png'

const Header: React.FC = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { getUserById } = useUsersService();
  const { user: authedUser } = useAppSelector((state) => state.auth);

  const { isLoading, isError, data: user } = getUserById;
  const loading = isLoading || isError || !isOnline;

  const { startChatHandler, followHandler, unfollowHandler, sendInvitationHandler } = useHeaderFeatures();

  return (
    <section id='user-header'>
      <Container>
        <div className='mt-3 w-full relative pb-[220px] md:pb-[100px]'>
          <img
            className='w-full h-[40vh] rounded-[12px] max-sm:h-[230px] object-cover'
            src={USER_COVER_IMAGE}
            alt='cover'
          />

          <div className='w-full flex items-center md:items-end justify-between absolute bottom-0 flex-col md:flex-row gap-4'>
            <div className='flex items-center md:items-end flex-col md:flex-row gap-4'>
              <div className='avatar-skeleton rounded-full border-4 border-green overflow-hidden grow'>
                {loading ? (
                  <CustomSkeleton
                    type='image'
                    block
                    active={true}
                    className='avatar-skeleton'
                  />
                ) : (
                  <Image
                    src={user?.profile_photo ? user.profile_photo : noUserImage}
                    alt={user ? `${user?.name} ${user?.surname}` : "avatar"}
                    loading='lazy'
                  />
                )}
              </div>
              <div className='flex flex-col items-center md:items-start gap-1'>
                {loading ? (
                  <CustomSkeleton type='input' active />
                ) : (
                  <h3 className='text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-nowrap'>
                    {(`${String(user?.name)} ${String(user?.surname)}`).slice(0, 22)}
                  </h3>
                )}
                {loading ? (
                  <CustomSkeleton type='input' active />
                ) : (
                  <p>
                    {user?.followers?.length ?? 0} {t("user.followers")}
                  </p>
                )}
              </div>
            </div>
            <>
              {loading ? (
                <div className='flex flex-wrap justify-center md:justify-end gap-4'>
                  <CustomSkeleton
                    type='input'
                    active
                    className='btn-skeleton'
                  />
                </div>
              ) : (
                <div className='flex items-center flex-wrap justify-center md:justify-end gap-4'>
                  {authedUser?._id === user?._id ? (
                    <Button variant='primary'>
                      <UserOutlined /> {t('user.you')}
                    </Button>
                  ) : (
                    <>
                      <Button variant='primary' onClick={startChatHandler}>
                        <WechatOutlined /> {t('user.start_chat')}
                      </Button>
                      <Button variant='primary' onClick={sendInvitationHandler}>
                        <SendOutlined /> {t('user.send_invitation')}
                      </Button>
                      {authedUser?.followers?.includes(user?._id) ? (
                        <Button variant='primary' onClick={unfollowHandler}>
                          <MinusOutlined /> {t('user.unfollow')}
                        </Button>
                      ) : (
                        <Button variant='primary' onClick={followHandler}>
                          <PlusCircleOutlined /> {t('user.follow')}
                        </Button>
                      )}
                    </>
                  )}
                </div>
              )}
            </>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
