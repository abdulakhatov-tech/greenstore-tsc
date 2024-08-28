import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { toggleProductFormModalVisibility } from "@redux/slices/modal";
import useMyProductsService from "@services/my-products";
import { useNotification } from "@tools/notification/notification";
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
    dispatch(toggleProductFormModalVisibility(true));
  };

  const editProductHandler = () => {
    dispatchNotification({
      type: "error",
      message: "Editing is not working currently. ",
      description: "Coming soon...",
    });
  };

  return {
    removeProductHander,
    editProductHandler,
    addProductHandler,
    ...myProducts,
  };
};

export default useMyProductsFeatures;
