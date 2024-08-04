import { FC, useState } from "react";
import { HeartOutlined, LoadingOutlined } from "@ant-design/icons";
import { FaHeart } from "react-icons/fa";

import Button from "@generic/button";
import useShoppingCartService from "@services/shopping-cart";
import { ActionButtonsPropsI } from "./types";
import useWishlistService from "@services/wishlist";
import { ProductPropsI } from "@type/index";
import { useTranslation } from "react-i18next";

const ActionButtons: FC<ActionButtonsPropsI> = ({ product }) => {
  const { t } = useTranslation();
  const { addOrUpdateCartItem, loading } = useShoppingCartService();
  const { addCartItemToWishlist, removeFromWishlist, wishlist } =
    useWishlistService();
  const [loadingWishlist, setLoadingWishlist] = useState<boolean>(false);

  const isInWishlist = (product: ProductPropsI) =>
    wishlist?.data?.some((item: ProductPropsI) => item?._id === product?._id);

  const addToCartHandler = () => {
    if (!loading) {
      addOrUpdateCartItem(product);
    }
  };

  const addCartItemToWishlistHandler = async () => {
    if (!loading) {
      setLoadingWishlist(true);
      await addCartItemToWishlist(product);
      setLoadingWishlist(false);
    }
  };

  const removeFromWishlistHandler = async () => {
    if (!loading) {
      setLoadingWishlist(true);
      await removeFromWishlist(product);
      setLoadingWishlist(false);
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <Button type='button' variant='primary'>
        {t('product_details_page.buy_now')}
      </Button>
      <Button
        type='button'
        variant='secondary'
        onClick={addToCartHandler}
        loading={loading}
      >
        {t('product_details_page.add_to_cart')}
      </Button>
      <Button type='button' variant='secondary'>
        {loadingWishlist ? (
          <LoadingOutlined />
        ) : isInWishlist(product) ? (
          <FaHeart className='text-[19px] md:text-[22px]' onClick={removeFromWishlistHandler} />
        ) : (
          <HeartOutlined className='text-[19px] md:text-[22px]' onClick={addCartItemToWishlistHandler} />
        )}
      </Button>
    </div>
  );
};

export default ActionButtons;
