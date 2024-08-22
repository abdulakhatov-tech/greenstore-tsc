import { useTranslation } from "react-i18next";
import { Form, Input, Select, Upload } from "antd";

import Button from "@generic/button";
import { useAuth } from "@config/auth";
import useFormRules from "@utils/form";
import { UPLOAD_URL } from "@utils/index";
import FormField from "@generic/form-field";
import { CategoryPropsI } from "@type/index";
import useCategoryService from "@services/category";
import useProductFormModalFeatures from "../../features";

import type { UploadProps } from "antd/es/upload/interface";

const PlantForm: React.FC = () => {
  const { t } = useTranslation();

  const { getToken } = useAuth();
  const { plantFormRules } = useFormRules();
  const { isLoading, data } = useCategoryService();
  const {
    onFinish,
    onCancel,
    loading,
    form,
    handleChange,
    mainImageFileList,
    detailedImage1FileList,
    detailedImage2FileList,
    detailedImage3FileList,
    detailedImage4FileList,
    setDetailedImage1FileList,
    setDetailedImage2FileList,
    setDetailedImage3FileList,
    setDetailedImage4FileList,
    setMainImageFileList,
    allImagesUploaded
  } = useProductFormModalFeatures();

  const uploadProps: UploadProps<any> = {
    name: "image",
    multiple: false,
    action: UPLOAD_URL,
    listType: "picture-card",
    className: "w-full",
    data: { type: "img" },
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    accept: ".png,.jpg,.jpeg",
    maxCount: 1,
  };

  return (
    <Form layout='vertical' form={form} onFinish={onFinish}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-[0px_16px]'>
        <FormField
          name='title'
          labelKey={t("modal.plant_form_modal.title")}
          rules={plantFormRules["title"]}
        />
        <Form.Item
          name='category'
          label={t("modal.plant_form_modal.category")}
          rules={plantFormRules["category"]}
        >
          <Select
            options={data?.map((item: CategoryPropsI) => ({
              ...item,
              label: item.title,
              value: item.route_path,
            }))}
            loading={isLoading}
            placeholder={t("modal.plant_form_modal.select_category")}
            className='h-[38px]'
          />
        </Form.Item>
        <FormField
          name='price'
          labelKey={`${t("modal.plant_form_modal.price")} ($)`}
          rules={plantFormRules["price"]}
          type='number'
        />
        <FormField
          name='discount_price'
          labelKey={t("modal.plant_form_modal.discount_price")}
          rules={plantFormRules["discount_price"]}
          type='number'
        />
      </div>
      <Form.Item
        name='short_description'
        label={t("modal.plant_form_modal.short_description")}
        rules={plantFormRules["short_description"]}
      >
        <Input.TextArea
          style={{ resize: "none", height: "100px" }}
          showCount
          maxLength={300}
          placeholder={t("modal.plant_form_modal.short_description")}
        />
      </Form.Item>
      <Form.Item
        label={t("modal.plant_form_modal.description")}
        name='description'
        rules={plantFormRules["description"]}
      >
        <Input.TextArea
          showCount
          style={{ height: "200px", resize: "none" }}
          maxLength={10000}
          placeholder={t("modal.plant_form_modal.description")}
        />
      </Form.Item>

      <Form.Item
        name='main_image'
        label={t("modal.plant_form_modal.main_image")}
        rules={plantFormRules["image"]}
      >
        <Upload
          {...uploadProps}
          fileList={mainImageFileList}
          onChange={(info) =>
            handleChange(info, setMainImageFileList, "main_image")
          }
        >
          {!mainImageFileList.length && (
            <p className='ant-upload-text p-2'>
              {t("modal.plant_form_modal.upload_image")}
            </p>
          )}
        </Upload>
      </Form.Item>

      <Form.Item label={t("modal.plant_form_modal.additional_images")}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full'>
          <Form.Item name='detailed_image_1' rules={plantFormRules["image"]}>
            <Upload
              {...uploadProps}
              fileList={detailedImage1FileList}
              onChange={(info) =>
                handleChange(
                  info,
                  setDetailedImage1FileList,
                  "detailed_image_1"
                )
              }
            >
              {!detailedImage1FileList.length && (
                <p className='ant-upload-text'>
                  {t("modal.plant_form_modal.upload_image")}
                </p>
              )}
            </Upload>
          </Form.Item>
          <Form.Item name='detailed_image_2' rules={plantFormRules["image"]}>
            <Upload
              {...uploadProps}
              fileList={detailedImage2FileList}
              onChange={(info) =>
                handleChange(
                  info,
                  setDetailedImage2FileList,
                  "detailed_image_2"
                )
              }
            >
              {!detailedImage2FileList.length && (
                <p className='ant-upload-text'>
                  {t("modal.plant_form_modal.upload_image")}
                </p>
              )}
            </Upload>
          </Form.Item>
          <Form.Item name='detailed_image_3' rules={plantFormRules["image"]}>
            <Upload
              {...uploadProps}
              fileList={detailedImage3FileList}
              onChange={(info) =>
                handleChange(
                  info,
                  setDetailedImage3FileList,
                  "detailed_image_3"
                )
              }
            >
              {!detailedImage3FileList.length && (
                <p className='ant-upload-text'>
                  {t("modal.plant_form_modal.upload_image")}
                </p>
              )}
            </Upload>
          </Form.Item>
          <Form.Item name='detailed_image_4' rules={plantFormRules["image"]}>
            <Upload
              {...uploadProps}
              fileList={detailedImage4FileList}
              onChange={(info) =>
                handleChange(
                  info,
                  setDetailedImage4FileList,
                  "detailed_image_4"
                )
              }
            >
              {!detailedImage4FileList.length && (
                <p className='ant-upload-text'>
                  {t("modal.plant_form_modal.upload_image")}
                </p>
              )}
            </Upload>
          </Form.Item>
        </div>
      </Form.Item>

      <div className='flex gap-4 justify-end'>
        <Button type='button' variant='secondary' onClick={onCancel}>
          {t("modal.plant_form_modal.cancel")}
        </Button>

        <Button type='submit' variant='primary' loading={loading} disabled={!allImagesUploaded}>
          {t("modal.plant_form_modal.add")}
        </Button>
      </div>
    </Form>
  );
};

export default PlantForm;
