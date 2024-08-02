import { Avatar, Badge, Tooltip } from "antd";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  AlignRightOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import Button from "@generic/button";
import { useAuth } from "@config/auth";
import useHeaderFeatures from "@components/header/features";
import { useTranslation } from "react-i18next";
import Locale from "@components/common/locale";

const Actions = () => {
  const { t } = useTranslation();
  const { isAuthed, getUser } = useAuth();
  const { handleSearch, handleAuth, handleUser, handleSideMenu } = useHeaderFeatures();

  return (
    <div className='flex items-center gap-3 sm:gap-4 md:gap-6'>
      <Tooltip color='#46A358' title={t("header.search")}>
        <SearchOutlined
          onClick={handleSearch}
          className='cursor-pointer text-[18px] md:text-[22px] hover:text-green'
        />
      </Tooltip>
      <Tooltip color='#46A358' title={t("header.shopping_cart")}>
        <Badge count={0} overflowCount={99}>
          <ShoppingCartOutlined className='cursor-pointer text-[18px] md:text-[22px] hover:text-green' />
        </Badge>
      </Tooltip>
      <Tooltip color='#46A358' title={t("header.favourites")}>
        <Badge count={0} overflowCount={99}>
          <HeartOutlined className='cursor-pointer text-[18px] md:text-[22px] hover:text-green' />
        </Badge>
      </Tooltip>
      <Locale />
      <AlignRightOutlined onClick={handleSideMenu} className='text-[18px] md:text-[23px] text-black block lg:hidden cursor-pointer hover:text-green' />

      {isAuthed() ? (
        <Tooltip
          title={`${getUser()?.user?.name} ${getUser()?.user?.surname}`}
          className='hidden lg:block'
        >
          <div
            onClick={handleUser}
            className='border-2  border-green rounded-full'
          >
            {getUser()?.user?.profile_photo ? (
              <Avatar
                src={getUser()?.user?.profile_photo}
                alt={getUser()?.user?.name}
                size={40}
              />
            ) : (
              <Avatar>{getUser()?.user?.name?.slice(0, 1)}</Avatar>
            )}
          </div>
        </Tooltip>
      ) : (
        <Button
          variant='primary'
          type='button'
          className='animate-bounce w-[100px] hidden lg:block'
          onClick={handleAuth}
          aria-label='Login button'
        >
          <LoginOutlined /> {t("header.login")}
        </Button>
      )}
    </div>
  );
};

export default Actions;
