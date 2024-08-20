import { Form, Input, Select, Upload } from "antd";

import Button from "@generic/button";
import FormField from "@generic/form-field";
import useCategoryService from "@services/category";
import { CategoryPropsI } from "@type/index";
import useProductFormModalFeatures from '../../features'
import { useAuth } from "@config/auth";

import type { UploadProps } from 'antd/es/upload/interface';

const PlantForm: React.FC = () => {
   const {getToken} = useAuth();
  const { isLoading, data } = useCategoryService();
  const { onFinish, onCancel, actionType } = useProductFormModalFeatures();

  const uploadProps: UploadProps<any> = {
    name: "image",
    multiple: false,
    action:
       "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7",
    listType: "picture-card",
    className: "w-full",
    data: { type: "img" },
    headers: {
       Authorization: `Bearer ${getToken()}`,
    },
    accept: ".png,.jpg,.jpeg",
 };

  return (
    <Form layout='vertical' onFinish={onFinish}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-[0px_16px]'>
        <FormField
          name='title'
          labelKey='Name of plant'
          rules={[{ required: true, message: "Please enter plant title!" }]}
        />
        <Form.Item
               label="Category"
               name="category"
               rules={[
                  { required: true, message: "Please enter plant category!" },
               ]}
            >
               <Select
                  options={data?.map((item: CategoryPropsI) => ({
                     ...item,
                     label: item.title,
                     value: item.route_path,
                  }))}
                  loading={isLoading}
                  placeholder={"Select category"}
                  className="h-[38px]"
               />
            </Form.Item>
        <FormField
          name='price'
          labelKey='Price ($)'
          rules={[{ required: true, message: "Please enter plant price!" }]}
          type='number'
        />
        <FormField
          name='discount_price'
          labelKey="Discount price (if it's available) ($)"
          rules={[{ required: true, message: "Please enter discount!" }]}
          type='number'
        />
      </div>
        <Form.Item
            label="Short Description"
            name="short_description"
            rules={[
               { required: true, message: "Please enter short description" },
            ]}
         >
            <Input.TextArea
               style={{ resize: "none", height: "100px" }}
               showCount
               maxLength={300}
               placeholder="Short Description..."
            />
         </Form.Item>
         <Form.Item
            label="Description"
            name="description"
            rules={[
               {
                  required: true,
                  message: "Please enter the product description!",
               },
            ]}
         >
            <Input.TextArea
               showCount
               style={{ height: "200px", resize: "none" }}
               maxLength={5000}
               placeholder="Description..."
            />
         </Form.Item>

         <Form.Item
            label="Main image"
            name="main_image"
            rules={[
               {
                  required: true,
                  message: "Please, upload main image.",
               },
            ]}
         >
            <Upload {...uploadProps}>
               <p className="ant-upload-text">Upload your main image</p>
            </Upload>
         </Form.Item>

         <Form.Item label='Additional images'>
            <div className="flex items-center flex-wrap gap-7">
            <Form.Item
                name="detailed_image_1"
                rules={[
                {
                    required: true,
                    message: "Please, upload image.",
                },
                ]}
            >
                <Upload {...uploadProps}>
                  <p className="ant-upload-text">Upload your image</p>
                </Upload>
            </Form.Item>
            <Form.Item
                name="detailed_image_2"
                rules={[
                {
                    required: true,
                    message: "Please, upload image.",
                },
                ]}
            >
                <Upload {...uploadProps}>
                <p className="ant-upload-text">Upload your image</p>
                </Upload>
            </Form.Item>
            <Form.Item
                name="detailed_image_3"
                rules={[
                {
                    required: true,
                    message: "Please, upload image.",
                },
                ]}
            >
                <Upload {...uploadProps}>
                <p className="ant-upload-text">Upload your image</p>
                </Upload>
            </Form.Item>
            <Form.Item
                name="detailed_image_4"
                rules={[
                {
                    required: true,
                    message: "Please, upload image.",
                },
                ]}
            >
                <Upload {...uploadProps}>
                <p className="ant-upload-text">Upload your image</p>
                </Upload>
            </Form.Item>
            </div>
         </Form.Item>

      <div className='flex gap-4 justify-end'>
        <Button type='button' variant='secondary' onClick={onCancel}>
          Cancel
        </Button>

        <Button type='submit' variant='primary'>
          {actionType === 'add' ? 'Add' : 'Save'}
        </Button>
      </div>
    </Form>
  );
};

export default PlantForm;
