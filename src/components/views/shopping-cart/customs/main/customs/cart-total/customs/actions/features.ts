import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import useCartTotalFeatures from "../../features";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";

const useActionsFeatures = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useCartTotalFeatures();

  const handleCheckout = () => {
    if (!cart?.length) {
      dispatch(
        setNotification({
          type: "warning",
          message: t("shopping_cart.empty_cart"),
          description: t("shopping_cart.empty_cart_description"),
        })
      );

      return;
    }

    navigate("/shop/checkout");
    dispatch(
      setNotification({
        type: "success",
        message: t("shopping_cart.checkout_success"),
        description: t("shopping_cart.checkout_success_description"),
      })
    );
  };

  const handleContinueShopping = () => {
    navigate("/#indoor-plant-collection")
  }
  return { handleCheckout, handleContinueShopping };
};

export default useActionsFeatures;
