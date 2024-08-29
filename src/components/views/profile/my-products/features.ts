import {
  toggleAddProductFormModalVisibility,
  toggleEditProductFormModalVisibility,
} from "@redux/slices/modal";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { useNotification } from "@tools/notification/notification";
import useMyProductsService from "@services/my-products";
import { ProductPropsI } from "@type/index";

const useMyProductsFeatures = () => {
  const { myProducts, removeProduct } = useMyProductsService();
  const dispatch = useAppDispatch();
  const dispatchNotification = useNotification();

  const { user } = useAppSelector(({ auth }) => auth);

  const removeProductHander = async (product: ProductPropsI) => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(removeProduct(product)), 200);
    });
  };

  const addProductHandler = () => {
    if (!user?.permission?.create) {
      dispatchNotification({
        type: "info",
        message: "Creating product is not allowed.",
        description: "You don't have permission to create product.",
      });

      return;
    }
    dispatch(toggleAddProductFormModalVisibility(true));
  };

  const editProductHandler = (product: ProductPropsI) => {
    if (!user?.permission?.create) {
      dispatchNotification({
        type: "error",
        message: "Editing product is not allowed.",
        description: "You don't have permission to edit product.",
      });

      return;
    }

    dispatch(
      toggleEditProductFormModalVisibility({
        open: true,
        product,
      })
    );
  };

  return {
    removeProductHander,
    editProductHandler,
    addProductHandler,
    ...myProducts,
  };
};

export default useMyProductsFeatures;
