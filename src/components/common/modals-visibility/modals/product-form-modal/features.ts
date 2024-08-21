import { Form } from "antd";
import { useEffect, useState } from "react";

import { useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";
import useMyProductsService from "@services/my-products";
import { AddingEditingProductI } from "@type/index";

const useProductFormModalFeatures = () => {
  const [form] = Form.useForm();
  const { addProduct } = useMyProductsService();
  const { getParam, removeParam } = useSearchParamsHook();
  const { productFormModalVisibility } = useAppSelector((state) => state.modal);
  const { product } = useAppSelector((state) => state.product);

  const [loading, setLoading] = useState<boolean>(false);

  const [mainImageFileList, setMainImageFileList] = useState<any[]>([]);
  const [detailedImage1FileList, setDetailedImage1FileList] = useState<any[]>([]);
  const [detailedImage2FileList, setDetailedImage2FileList] = useState<any[]>([]);
  const [detailedImage3FileList, setDetailedImage3FileList] = useState<any[]>([]);
  const [detailedImage4FileList, setDetailedImage4FileList] = useState<any[]>([]);

  const actionType = getParam("action-type");

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product)
      setMainImageFileList(product.main_image ? [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: product.main_image,
      }] : []);
  
      setDetailedImage1FileList(product.detailed_images[0] ? [{
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: product.detailed_images[0],
      }] : []);
  
      setDetailedImage2FileList(product.detailed_images[1] ? [{
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: product.detailed_images[1],
      }] : []);
  
      setDetailedImage3FileList(product.detailed_images[2] ? [{
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: product.detailed_images[2],
      }] : []);
  
      setDetailedImage4FileList(product.detailed_images[3] ? [{
        uid: '-5',
        name: 'image.png',
        status: 'done',
        url: product.detailed_images[3],
      }] : []);
    } else {
      form.resetFields();
      setMainImageFileList([]);
      setDetailedImage1FileList([]);
      setDetailedImage2FileList([]);
      setDetailedImage3FileList([]);
      setDetailedImage4FileList([]);
    }
  }, [product, form]);
  
  const handleChange = (info: any, setFileList: any, fieldName: any) => {
    const newFileList = info.fileList.slice(-1); // Limit to only one image
    setFileList(newFileList);
    form.setFieldsValue({ [fieldName]: newFileList });
  };

  const onFinish = async (e: any) => {
    setLoading(true);
    const formattedData: AddingEditingProductI = {
      title: e.title,
      price: Number(e.price),
      category: e.category,
      discount: !!e.discount_price,
      discount_price: Number(e.discount_price),
      short_description: e.short_description,
      description: e.description,
      main_image: e.main_image[0].response?.image_url.url,
      detailed_images: [
        e.detailed_image_1[0].response?.image_url.url,
        e.detailed_image_2[0].response?.image_url.url,
        e.detailed_image_3[0].response?.image_url.url,
        e.detailed_image_4[0].response?.image_url.url,
      ],
    };

    await addProduct(formattedData);
    setLoading(false);
    removeParam("action-type");
  };

  const onCancel = () => {
    removeParam("action-type");
  };

  return {
    handleChange,
    mainImageFileList,
    detailedImage1FileList,
    detailedImage2FileList,
    detailedImage3FileList,
    detailedImage4FileList,
    setMainImageFileList,
    setDetailedImage1FileList,
    setDetailedImage2FileList,
    setDetailedImage3FileList,
    setDetailedImage4FileList,
    form,
    loading,
    actionType,
    onFinish,
    onCancel,
    open: productFormModalVisibility,
  };
};

export default useProductFormModalFeatures;
