import { useCallback, useEffect, useState } from "react";

import useAxios from "@hooks/useAxios";
import {
  setCoupon,
  setPaymentMethod,
  setShoppingCart,
} from "@redux/slices/shopping-cart";
import { setNotification } from "@redux/slices/notification";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { getTotalPricePropsI } from "./types";
import {
  CartProductPropsI,
  NotificationPropsI,
  ProductPropsI,
} from "@type/index";

const useShoppingCartService = () => {
  const axios = useAxios();
  const dispatch = useAppDispatch();
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

  // function for dispatching notifications
  const dispatchNotification = useCallback(
    ({ type, message, description }: NotificationPropsI): void => {
      dispatch(setNotification({ type, message, description }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const addOrUpdateCartItem = useCallback(
    (product: ProductPropsI) => {
      setLoading(true);

      const { _id, title } = product;
      const existingProduct = cart?.find(
        (item: CartProductPropsI) => item._id === _id
      );

      if (existingProduct) {
        const updatedCart = cart?.map(
          (item: CartProductPropsI): CartProductPropsI =>
            item?._id === _id ? { ...item, quantity: item?.quantity + 1 } : item
        );

        dispatch(setShoppingCart(updatedCart));

        dispatchNotification({
          type: "info",
          message: "Product quantity updated",
          description: `You have ${existingProduct?.quantity} ${title} in the cart now.`,
        });
      } else {
        const updatedCart: CartProductPropsI[] = [
          ...cart,
          { ...product, quantity: 1 },
        ];

        dispatch(setShoppingCart(updatedCart));

        dispatchNotification({
          type: "success",
          message: "Product added to cart",
          description: `You added ${title} to your cart`,
        });
      }

      setLoading(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  const updateProductQuantity = useCallback(
    (product: ProductPropsI, isIncrement: boolean = true) => {
      const { _id, title } = product;

      const productExists = cart.find(
        (item: CartProductPropsI) => item._id === _id
      );

      if (!productExists) {
        dispatchNotification({
          type: "error",
          message: `${title} not found in the cart`,
          description:
            "The product you're trying to add to the cart doesn't exist.",
        });

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
        message: "Product quantity updated",
        description: `You have ${productExists?.quantity} ${title} in the cart now.`,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  const removeCartItem = useCallback(
    (product: ProductPropsI) => {
      const { _id, title } = product;
      const existingProduct = cart?.find(
        (item: CartProductPropsI) => item?._id === _id
      );

      if (!existingProduct) {
        dispatchNotification({
          type: "error",
          message: `${title} not found in the cart`,
          description:
            "The product you're trying to remove from the cart doesn't exist.",
        });
      }

      const updatedCart = cart.filter(
        (item: CartProductPropsI) => item?._id !== _id
      );

      dispatch(setShoppingCart(updatedCart));
      dispatchNotification({
        type: "success",
        message: "Product removed from cart",
        description: `You removed ${title} from your cart`,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  const getTotalPrice = useCallback(
    (
      couponPercentage: number = coupon?.discount_for ?? 0
    ): getTotalPricePropsI => {
      // Calculating the total price without any discount or coupon
      const totalWithoutCoupon: number = cart.reduce(
        (total: number, item: CartProductPropsI): number =>
          total + item.price * item.quantity,
        0
      );

      // Calculating the total price with the shipping cost included
      const totalWithShipping: number = cart.length
        ? totalWithoutCoupon + shipping
        : 0;

      // Calculating the total price with the coupon discount applied
      const totalWithCoupon: number = cart.length
        ? totalWithoutCoupon * ((100 - couponPercentage) / 100) + shipping
        : 0;

      return {
        totalWithoutCoupon,
        totalWithShipping,
        totalWithCoupon,
      };
    },
    [cart, coupon, shipping]
  );

  const clearCart = () => {
    dispatch(setShoppingCart([]));
    dispatch(setCoupon({}));
    dispatch(setPaymentMethod(""));
    localStorage.removeItem("cart");
    localStorage.removeItem("coupon");
    localStorage.removeItem("payment_method");
  };

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
            message: "Coupon applied successfully",
            description: `You applied ${value?.coupon_code} as your coupon`,
          });
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";

        dispatchNotification({
          type: "error",
          message: errorMessage,
          description: "Failed to apply coupon",
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, dispatchNotification]
  );

  const formattedDiscount = coupon?.discount_for
    ? `${coupon.discount_for}%`
    : "0%";

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
