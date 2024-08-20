import { useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";
import useMyProductsService from "@services/my-products";
import { AddingEditingProductI } from "@type/index";

const useProductFormModalFeatures = () => {
  const { getParam, removeParam } = useSearchParamsHook();
  const { addProduct } = useMyProductsService();
  const { productFormModalVisibility } = useAppSelector((state) => state.modal);

  const actionType = getParam("action-type");

  const onFinish = async (e: any) => {
    const formattedData: AddingEditingProductI = {
      title: e.title,
      price: Number(e.price),
      category: e.category,
      discount: !!e.discount_price,
      discount_price: Number(e.discount_price),
      short_description: e.short_description,
      description: e.description,
      main_image: e.main_image.file.response?.image_url.url,
      detailed_images: [
        e.detailed_image_1.file.response?.image_url.url,
        e.detailed_image_2.file.response?.image_url.url,
        e.detailed_image_3.file.response?.image_url.url,
        e.detailed_image_4.file.response?.image_url.url,
      ],
    };

    await addProduct(formattedData);
  };

  const onCancel = () => {
    removeParam("action-type");
  };

  return {
    actionType,
    onFinish,
    onCancel,
    open: productFormModalVisibility,
  };
};

export default useProductFormModalFeatures;
