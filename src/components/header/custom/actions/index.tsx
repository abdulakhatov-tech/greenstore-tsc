import { Avatar, Badge, Tooltip } from "antd";
import { useTranslation } from "react-i18next";

import {
  LoginOutlined,
  ShoppingCartOutlined,
  AlignRightOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import Button from "@generic/button";
import { Notifications } from "./customs";
import Locale from "@components/common/locale";
import { useAppSelector } from "@hooks/useRedux";
import useWishlistService from "@services/wishlist";
import useHeaderFeatures from "@components/header/features";

const Actions = () => {
  const { t } = useTranslation();
  const { isAuthed, user } = useAppSelector(({ auth }) => auth);
  const { cart } = useAppSelector(({ shoppingCart }) => shoppingCart);
  const { wishlist } = useWishlistService();
  
  const {
    handleAuth,
    handleUser,
    handleSideMenu,
    handleShoppingCart,
    handleWishlist,
  } = useHeaderFeatures();

  return (
    <div id="header-actions" className='flex items-center gap-4 sm:gap-5 md:gap-6'>
      <Notifications />
      
      <Tooltip color='#46A358' title={t("header.shopping_cart")}>
        <Badge count={isAuthed ? cart?.length : 0} overflowCount={9} color='#46A358'>
          <ShoppingCartOutlined
            onClick={handleShoppingCart}
            className='cursor-pointer text-[20px] md:text-[22px] hover:text-green'
            aria-label={t("header.shopping_cart")}
          />
        </Badge>
      </Tooltip>
      
      <Tooltip color='#46A358' title={t("header.favourites")}>
        <Badge count={wishlist?.data?.length || 0} overflowCount={9} color='#46A358'>
          <HeartOutlined
            onClick={handleWishlist}
            className='cursor-pointer text-[20px] md:text-[22px] hover:text-green'
            aria-label={t("header.favourites")}
          />
        </Badge>
      </Tooltip>
      
      <Locale />
      
      <AlignRightOutlined
        onClick={handleSideMenu}
        className='text-[20px] md:text-[23px] text-black block lg:hidden cursor-pointer hover:text-green'
        aria-label={t("header.menu")}
      />

      {isAuthed ? (
        <Tooltip title={`${user?.name} ${user?.surname}`} className='hidden md:block'>
          <div
            onClick={handleUser}
            className='border-2 border-green rounded-full cursor-pointer'
          >
            {user?.profile_photo ? (
              <Avatar src={user?.profile_photo} alt={user?.name} size={30} />
            ) : (
              <Avatar>{user?.name?.charAt(0)}</Avatar>
            )}
          </div>
        </Tooltip>
      ) : (
        <Button
          variant='primary'
          type='button'
          className='animate-bounce font-normal hidden lg:block'
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
