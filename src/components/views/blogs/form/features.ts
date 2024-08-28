import { useNavigate, useParams } from 'react-router-dom';
import useBlogsServices from '@services/blogs';
import { useEffect, useState } from 'react';
import { Form } from 'antd';
import { BlogDataT } from '@type/index';

const useBlogFormFeatures = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { blogId } = useParams();
  const { getBlogById, createBlog, editBlogById } = useBlogsServices();
  const [loading, setLoading] = useState<boolean>(false);


  console.log(getBlogById?.data)
  useEffect(() => {
    if (blogId && getBlogById?.data) {
      form.setFieldsValue({
        title: getBlogById?.data.title,
        short_description: getBlogById?.data.short_description,
        content: getBlogById?.data.content,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId, getBlogById.data]);

  const onFinish = async (values: BlogDataT) => {
    setLoading(true);
    try {
      if (blogId) {
        editBlogById(values);
      } else {
        createBlog(values);
      }
      navigate('/blog');
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return { onFinish, loading, form };
};

export default useBlogFormFeatures;
