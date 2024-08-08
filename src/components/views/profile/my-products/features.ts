import useMyProductsService from "@services/my-products";
import { ProductPropsI } from "@type/index";

const useMyProductsFeatures = () => {
    const { myProducts, removeProduct } = useMyProductsService();

    const removeProductHander = async(product: ProductPropsI) => {
        await new Promise((resolve) => {
          setTimeout(() => resolve(removeProduct(product)), 3000);
        });
    }

  return {removeProductHander, ...myProducts};
};

export default useMyProductsFeatures;
