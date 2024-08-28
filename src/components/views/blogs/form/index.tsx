import React from "react";
import { Form, Input } from "antd";
import ReactQuill from "react-quill";
import { useTranslation } from "react-i18next";

import Button from "@generic/button";
import FormField from "@generic/form-field";
import useBlogFormFeatures from "./features";
import { useParams } from "react-router-dom";
import Header from "../header";

const BlogPostForm: React.FC = () => {
  const { t } = useTranslation();
  const { blogId } = useParams();
  const { onFinish, loading, form } = useBlogFormFeatures();

  return (
    <>
      <Header />
      <Form layout='vertical' onFinish={onFinish} form={form}>
        <FormField
          labelKey={t('blog.form.title')}
          name='title'
          rules={[{ required: true, message: t('blog.form.title_error_message') }]}
          placeholderKey={t('blog.form.title')}
        />
        <Form.Item
          label={t('blog.form.short_description')}
          name='short_description'
          rules={[
            { required: true, message: t('blog.form.short_description_error_message') },
          ]}
        >
          <Input.TextArea
            placeholder={t('blog.form.short_description')}
            autoSize={{
              minRows: 3,
              maxRows: 10,
            }}
            showCount
            maxLength={250}
            className='hover:border-green focus:outline-none focus:ring-2 focus:ring-[#46A358] focus:ring-opacity-50'
          />
        </Form.Item>
        <Form.Item
          name='content'
          label={t('blog.form.content')}
          rules={[{ required: true, message: t('blog.form.content_error_message') }]}
        >
          <ReactQuill className='h-[40vh] mb-[66px] md:mb-[42px]' theme='snow' placeholder={t('blog.form.content')} />
        </Form.Item>
        <Form.Item className='flex justify-end'>
          <Button type='submit' variant='primary' disabled={loading} loading={loading}>
              { blogId ? t('blog.edit') : t('blog.create')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default BlogPostForm;
