import { FC } from "react";
import { HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import { FaHeart } from "react-icons/fa";

import Button from "@generic/button";
import { ActionButtonsPropsI } from "./types";
import { useTranslation } from "react-i18next";
import useActionButtonsFeatures from "./features";

const ActionButtons: FC<ActionButtonsPropsI> = ({ product }) => {
  const { t } = useTranslation();
  const {
    loadingWishlist,
    isInWishlist,
    buyNowHandler,
    addToCartHandler,
    addCartItemToWishlistHandler,
    removeFromWishlistHandler,
    loading,
  } = useActionButtonsFeatures();

  return (
    <div className='flex items-center gap-2'>
      <Button
        type='button'
        variant='primary'
        onClick={() => buyNowHandler(product)}
      >
        {t("product_details_page.buy_now")}
      </Button>
      <Button
        type='button'
        variant='secondary'
        onClick={() => addToCartHandler(product)}
        loading={loading}
      >
        {t("product_details_page.add_to_cart")}
      </Button>
      <Button type='button' variant='secondary'>
        {loadingWishlist ? (
          <LoadingOutlined />
        ) : isInWishlist(product) ? (
          <FaHeart
            className='text-[19px] md:text-[22px]'
            onClick={() => removeFromWishlistHandler(product)}
          />
        ) : (
          <HeartOutlined
            className='text-[19px] md:text-[22px]'
            onClick={() => addCartItemToWishlistHandler(product)}
          />
        )}
      </Button>
    </div>
  );
};

export default ActionButtons;
