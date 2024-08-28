import { useNavigate } from "react-router-dom";

import { AuthQuery, ProductPropsI } from "@type/index";
import useShoppingCartService from "@services/shopping-cart";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useAppSelector } from "@hooks/useRedux";

const useProductCardFeatures = () => {
  const navigate = useNavigate();
  const { isAuthed } = useAppSelector(({ auth }) => auth);
  const { addOrUpdateCartItem } = useShoppingCartService();
  const { setParam } = useSearchParamsHook();

  const addToCartHandler = (product: ProductPropsI) => {
    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);

      return;
    }

    addOrUpdateCartItem(product);
  };

  const viewProductHandler = (product: ProductPropsI) => {
    if (!isAuthed) {
      setParam("auth", AuthQuery.SignIn);

      return;
    }

    navigate(`/product/${product?.category}/${product?._id}`);
  };

  return { addToCartHandler, viewProductHandler };
};

export default useProductCardFeatures;
