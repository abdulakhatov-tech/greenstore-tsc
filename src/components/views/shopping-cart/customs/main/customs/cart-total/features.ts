import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Form } from "antd";

import useShoppingCartService from "@services/shopping-cart";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";

const useCartTotalFeatures = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const {
    cart,
    applyCoupon,
    getTotalPrice,
    coupon,
    shipping,
    formattedDiscount,
  } = useShoppingCartService();

  //states
  const [loading, setLoading] = useState<boolean>(false);

  // total price
  const { totalWithoutCoupon, totalWithShipping, totalWithCoupon } =
    getTotalPrice();

  const couponHandler = async (value: any) => {
    setLoading(true);

    if (!cart?.length) {
      dispatch(
        setNotification({
          type: "warning",
          message: t("shopping_cart.empty_cart"),
          description: t("shopping_cart.empty_cart_description"),
        })
      );

      setLoading(false);
      return;
    }

    await applyCoupon(value);
    form.resetFields();
    setLoading(false);
  };

  return {
    form,
    cart,
    loading,
    couponHandler,
    totalWithoutCoupon,
    totalWithShipping,
    totalWithCoupon,
    coupon,
    shipping,
    formattedDiscount,
  };
};

export default useCartTotalFeatures;
