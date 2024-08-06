import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@hooks/useRedux";
import useShoppingCartService from "@services/shopping-cart";
import useSearchParamsHook from "@hooks/useSearchParams";

const useTrackOrderFeatures = () => {
  const navigate = useNavigate();
  const { clearCart } = useShoppingCartService();
  const { trackOrderModalVisibility } = useAppSelector((state) => state.modal);
  const { removeParam } = useSearchParamsHook();

  const onCancel = () => {
    clearCart();
    removeParam("order");
    navigate("/");
  };

  const onTrackOrder = () => {
    clearCart();
    removeParam("order");
    navigate("/profile/track-order");
  };

  return { onCancel, onTrackOrder, open: trackOrderModalVisibility };
};

export default useTrackOrderFeatures;
