import useMyProductsService from "@services/my-products";
import { useNotification } from "@tools/notification/notification";
import { ProductPropsI } from "@type/index";

const useMyProductsFeatures = () => {
    const { myProducts, removeProduct } = useMyProductsService();
   const dispatchNotification = useNotification();

    const removeProductHander = async(product: ProductPropsI) => {
        await new Promise((resolve) => {
          setTimeout(() => resolve(removeProduct(product)), 3000);
        });
    }

    const editProductHandler = () => {
      dispatchNotification({
        type: "error",
        message: "Editing",
        description: "Editing product is not allowed"
      })
      // setParam('action-type', 'edit');
      // dispatch(setProduct(product))
    }

  return {removeProductHander, editProductHandler, ...myProducts};
};

export default useMyProductsFeatures;
