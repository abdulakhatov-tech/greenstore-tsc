import { Form } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { toggleAddProductFormModalVisibility } from "@redux/slices/modal";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import useMyProductsService from "@services/my-products";
import { AddingEditingProductI } from "@type/index";

const useProductFormModalFeatures = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { addProduct } = useMyProductsService();
  const { addProductFormModalVisibility } = useAppSelector((state) => state.modal);

  const [loading, setLoading] = useState<boolean>(false);

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
    // Reset form fields and file lists
    form.resetFields();
    setMainImageFileList([]);
    setDetailedImage1FileList([]);
    setDetailedImage2FileList([]);
    setDetailedImage3FileList([]);
    setDetailedImage4FileList([]);
  }, [form]);

  const handleChange = (info: any, setFileList: any, fieldName: any) => {
    const newFileList = info.fileList.slice(-1); // Limit to only one image
    setFileList(newFileList);
    form.setFieldsValue({ [fieldName]: newFileList });
  };

  const onCancel = () => {
    dispatch(toggleAddProductFormModalVisibility(false));
  };

  const onFinish = async (e: any) => {

    console.log(e, 'eeeeeeeeeeeeeeeee')
    try {
      setLoading(true);

      // Check if images are present
      if (
        !mainImageFileList.length ||
        !detailedImage1FileList.length ||
        !detailedImage2FileList.length ||
        !detailedImage3FileList.length ||
        !detailedImage4FileList.length
      ) {
        form.setFields([
          {
            name: "main_image",
            errors: [t("validation.image_required")],
          },
        ]);
        setLoading(false);
        return;
      }

      const formattedData: AddingEditingProductI = {
        title: e.title,
        price: Number(e.price),
        category: e.category,
        discount: !!e.discount_price,
        discount_price: Number(e.discount_price),
        short_description: e.short_description,
        description: e.description,
        main_image:
        typeof e.main_image[0] === "string"
          ? e.main_image[0]
          : e.main_image[0].response?.image_url.url,
      detailed_images: [
        typeof e.detailed_image_1[0] === "string"
          ? e.detailed_image_1[0]
          : e.detailed_image_1[0].response?.image_url.url,
        typeof e.detailed_image_2[0] === "string"
          ? e.detailed_image_2[0]
          : e.detailed_image_2[0].response?.image_url.url,
        typeof e.detailed_image_3[0] === "string"
          ? e.detailed_image_3[0]
          : e.detailed_image_3[0].response?.image_url.url,
        typeof e.detailed_image_4[0] === "string"
          ? e.detailed_image_4[0]
          : e.detailed_image_4[0].response?.image_url.url,
      ],
      };

      await addProduct(formattedData);
      setLoading(false);
      onCancel();
    } catch (error: any) {
      setLoading(false);
    }
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
    open: addProductFormModalVisibility,
  };
};

export default useProductFormModalFeatures;
