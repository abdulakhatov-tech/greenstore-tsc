import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import useCartTotalFeatures from "../../features";
import { useNotification } from "@tools/notification/notification";

const useActionsFeatures = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cart } = useCartTotalFeatures();
  const dispatchNotification = useNotification();

  const handleCheckout = () => {
    if (!cart?.length) {
      dispatchNotification({
        type: "warning",
        message: t("shopping_cart.empty_cart"),
        description: t("shopping_cart.empty_cart_description"),
      });

      return;
    }

    navigate("/checkout");
    dispatchNotification({
      type: "success",
      message: t("shopping_cart.checkout_success"),
      description: t("shopping_cart.checkout_success_description"),
    });
  };

  const handleContinueShopping = () => {
    navigate("/#indoor-plant-collection");
  };
  return { handleCheckout, handleContinueShopping };
};

export default useActionsFeatures;
