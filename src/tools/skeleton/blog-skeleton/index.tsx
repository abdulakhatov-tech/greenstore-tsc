import { Card } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined } from "@ant-design/icons";
import CustomSkeleton from "../index";
import "./style.css";

const BlogSkeleton: React.FC = () => {
  return (
    <Card
      actions={[
        <div className='text-black'>
          <EyeOutlined />
        </div>,
        <div className='text-black'>
          <CommentOutlined />
        </div>,
        <div className='text-black'>
          <HeartOutlined />
        </div>,
      ]}
      id='blog-skeleton'
      className="shadow"
    >
      <CustomSkeleton type='input' active className='title' />

      <div className='flex flex-col gap-2'>
        <CustomSkeleton type='input' active className='description-1' />
        <CustomSkeleton type='input' active className='description-2' />
        <CustomSkeleton type='input' active className='description-3' />
      </div>
    </Card>
  );
};

export default BlogSkeleton;
