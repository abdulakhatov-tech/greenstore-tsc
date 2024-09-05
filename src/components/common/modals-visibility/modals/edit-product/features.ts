import { Form } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { toggleEditProductFormModalVisibility } from "@redux/slices/modal";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import useMyProductsService from "@services/my-products";
import { AddingEditingProductI } from "@type/index";

const useProductFormModalFeatures = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { updateProductByCategory } = useMyProductsService();
  const { editProductFormModalVisibility } = useAppSelector(
    (state) => state.modal
  );

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
    if (
      editProductFormModalVisibility.open &&
      editProductFormModalVisibility.product
    ) {
      // Populate form with existing product data
      form.setFieldsValue({
        title: editProductFormModalVisibility.product.title,
        category: editProductFormModalVisibility.product.category,
        price: editProductFormModalVisibility.product.price,
        discount_price: editProductFormModalVisibility.product.discount_price,
        short_description:
          editProductFormModalVisibility.product.short_description,
        description: editProductFormModalVisibility.product.description,
        main_image: [
          {
            url: editProductFormModalVisibility.product.main_image,
            name: "Main Image",
            status: "done",
          },
        ],
        detailed_image_1: [
          {
            url: editProductFormModalVisibility.product.detailed_images[0],
            name: "Detailed Image 1",
            status: "done",
          },
        ],
        detailed_image_2: [
          {
            url: editProductFormModalVisibility.product.detailed_images[1],
            name: "Detailed Image 2",
            status: "done",
          },
        ],
        detailed_image_3: [
          {
            url: editProductFormModalVisibility.product.detailed_images[2],
            name: "Detailed Image 3",
            status: "done",
          },
        ],
        detailed_image_4: [
          {
            url: editProductFormModalVisibility.product.detailed_images[3],
            name: "Detailed Image 4",
            status: "done",
          },
        ],
      });

      setMainImageFileList([
        {
          url: editProductFormModalVisibility.product.main_image,
          name: "Main Image",
          status: "done",
        },
      ]);

      setDetailedImage1FileList([
        {
          url: editProductFormModalVisibility.product.detailed_images[0],
          name: "Detailed Image 1",
          status: "done",
        },
      ]);
      setDetailedImage2FileList([
        {
          url: editProductFormModalVisibility.product.detailed_images[1],
          name: "Detailed Image 2",
          status: "done",
        },
      ]);
      setDetailedImage3FileList([
        {
          url: editProductFormModalVisibility.product.detailed_images[2],
          name: "Detailed Image 3",
          status: "done",
        },
      ]);
      setDetailedImage4FileList([
        {
          url: editProductFormModalVisibility.product.detailed_images[3],
          name: "Detailed Image 4",
          status: "done",
        },
      ]);
    } else {
      // Reset form fields and file lists when not editing
      form.resetFields();
      setMainImageFileList([]);
      setDetailedImage1FileList([]);
      setDetailedImage2FileList([]);
      setDetailedImage3FileList([]);
      setDetailedImage4FileList([]);
    }
  }, [editProductFormModalVisibility, form]);

  const handleChange = (info: any, setFileList: any, fieldName: any) => {
    const newFileList = info.fileList.slice(-1); // Limit to only one image
    setFileList(newFileList);
    form.setFieldsValue({
      [fieldName]: newFileList.map((file: any) => {
        return file.response ? file.response.image_url.url : file.url; // Use existing URL or response URL
      }),
    });
  };

  const onCancel = () => {
    dispatch(
      toggleEditProductFormModalVisibility({ open: false, product: null })
    );
  };

  const onFinish = async (e: any) => {
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
            : typeof e.main_image[0]?.url === "string"
            ? e.main_image[0]?.url
            : e.main_image[0].response?.image_url.url,
        detailed_images: [
          typeof e.detailed_image_1[0]?.url === "string"
            ? e.detailed_image_1[0]?.url
            : typeof e.detailed_image_1[0] === "string"
            ? e.detailed_image_1[0]
            : e.detailed_image_1[0].response?.image_url.url,
          typeof e.detailed_image_2[0]?.url === "string"
            ? e.detailed_image_2[0]?.url
            : typeof e.detailed_image_2[0] === "string"
            ? e.detailed_image_2[0]
            : e.detailed_image_2[0].response?.image_url.url,
          typeof e.detailed_image_3[0]?.url === "string"
            ? e.detailed_image_3[0]?.url
            : typeof e.detailed_image_3[0] === "string"
            ? e.detailed_image_3[0]
            : e.detailed_image_3[0].response?.image_url.url,
          typeof e.detailed_image_4[0]?.url === "string"
            ? e.detailed_image_4[0]?.url
            : typeof e.detailed_image_4[0] === "string"
            ? e.detailed_image_4[0]
            : e.detailed_image_4[0].response?.image_url.url,
        ],
      };

      await updateProductByCategory({
        _id: editProductFormModalVisibility.product?._id,
        category: editProductFormModalVisibility.product?.category,
        data: { ...editProductFormModalVisibility.product, ...formattedData },
      });
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
    open: editProductFormModalVisibility.open,
  };
};

export default useProductFormModalFeatures;
