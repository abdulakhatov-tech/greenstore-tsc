import { useState } from "react";

import useWishlistService from "@services/wishlist";
import { ProductPropsI } from "@type/index";
import { useNavigate } from "react-router-dom";
import useShoppingCartService from "@services/shopping-cart";

const useActionButtonsFeatures = () => {
  const navigate = useNavigate();
  const { addCartItemToWishlist, removeFromWishlist, wishlist } =
    useWishlistService();
  const { addOrUpdateCartItem, loading, cart } = useShoppingCartService();

  const [loadingWishlist, setLoadingWishlist] = useState<boolean>(false);

  const isInWishlist = (product: ProductPropsI) =>
    wishlist?.data?.some((item: ProductPropsI) => item?._id === product?._id);

  const buyNowHandler = (product: ProductPropsI) => {
    if (!loading) {
      const check = cart.find(item => item?._id === product?._id)

      if(!check) {
        addOrUpdateCartItem(product);
      }
    }

    navigate("/shop/shopping-cart");
  };

  const addToCartHandler = (product: ProductPropsI) => {
    if (!loading) {
      addOrUpdateCartItem(product);
    }
  };

  const addCartItemToWishlistHandler = async (product: ProductPropsI) => {
    if (!loading) {
      setLoadingWishlist(true);
      await addCartItemToWishlist(product);
      setLoadingWishlist(false);
    }
  };

  const removeFromWishlistHandler = async (product: ProductPropsI) => {
    if (!loading) {
      setLoadingWishlist(true);
      await removeFromWishlist(product);
      setLoadingWishlist(false);
    }
  };

  return {
    loadingWishlist,
    isInWishlist,
    buyNowHandler,
    addToCartHandler,
    addCartItemToWishlistHandler,
    removeFromWishlistHandler,
    loading,
  };
};

export default useActionButtonsFeatures;
