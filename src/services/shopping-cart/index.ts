import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";

import {
  setCoupon,
  setPaymentMethod,
  setShoppingCart,
} from "@redux/slices/shopping-cart";
import useAxios from "@hooks/useAxios";
import { getTotalPricePropsI } from "./types";
import { CartProductPropsI, ProductPropsI } from "@type/index";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { useNotification } from "@tools/notification/notification";
import { calculateTotals, formatDiscount } from "@helpers/index";

const useShoppingCartService = () => {
  const axios = useAxios();
  const { t } = useTranslation()
  const dispatch = useAppDispatch();
  const dispatchNotification = useNotification();
  const { cart, coupon, shipping, payment_method } = useAppSelector(
    (state) => state.shoppingCart
  );

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(setCoupon({}));
      localStorage.removeItem("coupon");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.length]);

  const addOrUpdateCartItem = useCallback(
    (product: ProductPropsI) => {
      setLoading(true);
      const { _id } = product;
      const existingProduct = cart.find((item) => item._id === _id);

      const updatedCart = existingProduct
        ? cart.map((item) =>
            item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...cart, { ...product, quantity: 1 }];

      dispatch(setShoppingCart(updatedCart));

      dispatchNotification({
        type: existingProduct ? "info" : "success",
        message: existingProduct
          ? t('notification.product_quantity_updated')
          : t('notification.product_added_to_cart'),
        description: t('notification.product_cart_description'),
      });

      setLoading(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  const updateProductQuantity = useCallback(
    (product: ProductPropsI, isIncrement: boolean = true) => {
      const { _id } = product;

      const productExists = cart.find(
        (item: CartProductPropsI) => item._id === _id
      );

      if (!productExists) {
        addOrUpdateCartItem(product);
        return;
      }

      const updatedCart = cart?.map(
        (item: CartProductPropsI): CartProductPropsI =>
          item._id === _id
            ? {
                ...item,
                quantity: isIncrement
                  ? item?.quantity + 1
                  : Math.max(item.quantity - 1, 1),
              }
            : item
      );

      dispatch(setShoppingCart(updatedCart));

      dispatchNotification({
        type: "info",
        message: t('notification.product_quantity_updated'),
        description: t('notification.product_cart_description'),
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  const removeCartItem = useCallback(
    (product: ProductPropsI) => {
      const { _id } = product;
      const existingProduct = cart?.find(
        (item: CartProductPropsI) => item?._id === _id
      );

      if (!existingProduct) {
        dispatchNotification({
          type: "error",
          message: t('notification.product_not_found_in_cart_message'),
          description: t('notification.product_not_found_in_cart_description')
        });
      }

      const updatedCart = cart.filter(
        (item: CartProductPropsI) => item?._id !== _id
      );

      dispatch(setShoppingCart(updatedCart));
      dispatchNotification({
        type: "success",
        message: t('notification.product_removed_from_cart_message'),
        description: t('notification.product_removed_from_cart_description'),
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  const getTotalPrice = useCallback(
    (
      couponPercentage: number = coupon?.discount_for ?? 0
    ): getTotalPricePropsI => {
      return calculateTotals(cart, shipping, couponPercentage);
    },
    [cart, coupon, shipping]
  );

  const clearCart = useCallback(() => {
    dispatch(setShoppingCart([]));
    dispatch(setCoupon({}));
    dispatch(setPaymentMethod(""));
    localStorage.removeItem("cart");
    localStorage.removeItem("coupon");
    localStorage.removeItem("payment_method");
  }, [dispatch]);

  const applyCoupon = useCallback(
    async (value: any) => {
      try {
        const response = await axios({
          url: `/features/coupon`,
          params: {
            coupon_code: value.coupon_code,
          },
        });

        if (response?.status === 200) {
          dispatch(setCoupon(response?.data?.data));
          dispatchNotification({
            type: "success",
            message: t('notification.coupon_applied_message'),
            description: t('notification.coupon_applied_description'),
          });
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : t('notification.coupon_not_found_message');

        dispatchNotification({
          type: "error",
          message: errorMessage,
          description: t('notification.coupon_not_found_description'),
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, dispatchNotification]
  );

  const formattedDiscount = formatDiscount(coupon);

  return {
    addOrUpdateCartItem,
    updateProductQuantity,
    removeCartItem,
    clearCart,
    getTotalPrice,
    applyCoupon,
    formattedDiscount,
    payment_method,
    loading,
    cart,
    coupon,
    shipping,
  };
};

export default useShoppingCartService;
