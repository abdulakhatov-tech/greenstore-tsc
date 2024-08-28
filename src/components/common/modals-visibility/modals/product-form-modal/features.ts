import { Form } from "antd";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import useMyProductsService from "@services/my-products";
import { AddingEditingProductI } from "@type/index";
import { toggleProductFormModalVisibility } from "@redux/slices/modal";

const useProductFormModalFeatures = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { addProduct } = useMyProductsService();
  const { productFormModalVisibility } = useAppSelector((state) => state.modal);

  const [loading, setLoading] = useState<boolean>(false);
  const [allImagesUploaded, setAllImagesUploaded] = useState<boolean>(false);

  const [mainImageFileList, setMainImageFileList] = useState<any[]>([]);
  const [detailedImage1FileList, setDetailedImage1FileList] = useState<any[]>(
    []
  );
  const [detailedImage2FileList, setDetailedImage2FileList] = useState<any[]>(
    []
  );
  const [detailedImage3FileList, setDetailedImage3FileList] = useState<any[]>(
    []
  );
  const [detailedImage4FileList, setDetailedImage4FileList] = useState<any[]>(
    []
  );

  useEffect(() => {
    form.resetFields();
    setMainImageFileList([]);
    setDetailedImage1FileList([]);
    setDetailedImage2FileList([]);
    setDetailedImage3FileList([]);
    setDetailedImage4FileList([]);
  }, [form]);

  useEffect(() => {
    const areAllImagesUploaded =
      mainImageFileList.length > 0 &&
      detailedImage1FileList.length > 0 &&
      detailedImage2FileList.length > 0 &&
      detailedImage3FileList.length > 0 &&
      detailedImage4FileList.length > 0;

      setTimeout(() => {
        setAllImagesUploaded(areAllImagesUploaded);
      }, 2000)
  }, [
    mainImageFileList,
    detailedImage1FileList,
    detailedImage2FileList,
    detailedImage3FileList,
    detailedImage4FileList,
  ]);


  const handleChange = (info: any, setFileList: any, fieldName: any) => {
    const newFileList = info.fileList.slice(-1); // Limit to only one image
    setFileList(newFileList);
    form.setFieldsValue({ [fieldName]: newFileList });
  };

  const onCancel = () => {
    dispatch(toggleProductFormModalVisibility(false));
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
    onCancel();
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
    onFinish,
    onCancel,
    open: productFormModalVisibility,
    allImagesUploaded
  };
};

export default useProductFormModalFeatures;
