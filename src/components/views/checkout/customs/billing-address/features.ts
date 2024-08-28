import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

import useAxios from "@hooks/useAxios";
import { AuthQuery, BillingAddressPropsI, PAYMENT_METHODS } from "@type/index";
import useSearchParamsHook from "@hooks/useSearchParams";
import useShoppingCartService from "@services/shopping-cart";
import { setPaymentMethod } from "@redux/slices/shopping-cart";
import { useNotification } from "@tools/notification/notification";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";

const initialState: BillingAddressPropsI = {
  name: "",
  surname: "",
  country: "",
  city: "",
  street: "",
  additional_street: "",
  state: "",
  postal_code: "",
  email: "",
  phone_number: "",
  method: PAYMENT_METHODS.PAY_BY_CARD,
  notes: "",
};

const useBillingAddressFeatures = () => {
  const { t } = useTranslation();
  // hooks
  const axios = useAxios();
  const [form] = Form.useForm();
  const { isAuthed } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();
  const dispatchNotification = useNotification();
  const { setParam } = useSearchParamsHook();
  const navigate = useNavigate();
  const { cart, coupon, getTotalPrice } = useShoppingCartService();

  // states
  const [loading, setLoading] = useState(false);

  const { totalWithShipping, totalWithCoupon } = getTotalPrice();

  // methods
  const handleAuth = useCallback(() => {
    setParam("auth", AuthQuery.SignIn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleError = useCallback(
    (error: any) => {
      dispatchNotification({
        type: "error",
        message: error?.response?.data?.message || error?.message,
        description: "Failed to make an order",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onFinish = useCallback(
    async (values: BillingAddressPropsI) => {
      try {
        if (!cart.length) {
          dispatchNotification({
            type: "error",
            message: t("shopping_cart.empty_cart"),
            description: t("shopping_cart.empty_cart_description"),
          });
          navigate("/");
          return;
        }

        setLoading(true);

        if (!isAuthed) {
          handleAuth();
          return;
        }

        const shop_list = cart.map((item) => ({
          ...item,
          count: item.quantity,
        }));

        const total_price = !coupon?.code ? totalWithShipping : totalWithCoupon;

        await axios({
          method: "POST",
          url: "/order/make-order",
          data: {
            shop_list,
            billing_address: {
              ...values,
            },
            extra_shop_info: {
              total_price,
              method: values.method,
              coupon: {
                has_coupon: !!coupon.code,
                discount_for: coupon?.discount_for ?? 0,
              },
            },
          },
        });

        setParam("order", "track-order");
        dispatch(setPaymentMethod(values.method));
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart, isAuthed]
  );

  return { onFinish, initialState, loading, form };
};

export default useBillingAddressFeatures;
