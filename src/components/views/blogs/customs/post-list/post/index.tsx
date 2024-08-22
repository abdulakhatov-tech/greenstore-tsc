import { FC } from "react";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { EyeOutlined, CommentOutlined, HeartOutlined } from "@ant-design/icons";

import { BlogCardType } from "@type/index";

const Post: FC<BlogCardType> = ({
  title,
  short_description,
  views,
  reaction_length,
  created_by,
  _id,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      actions={[
        <div className="text-black" aria-label="Views">
          <EyeOutlined /> {views ?? 0}
        </div>,
        <div className="text-black" aria-label="Comments">
          <CommentOutlined /> {0}
        </div>,
        <div className="text-black" aria-label="Reactions">
          <HeartOutlined /> {reaction_length ?? 0}
        </div>,
      ]}
      className="shadow"
    >
      <h3
        onClick={() => navigate(`/blog/${created_by}/${_id}`)}
        className="text-[16px] md:text-[18px] font-semibold text-black cursor-pointer hover:underline truncate-single-line italic"
      >
        {title}
      </h3>
      <Typography
        spellCheck={true}
        className="text-black mt-[10px] text-[12px] md:text-[14px] blog-post-multiple-lines min-h-[90px] italic"
      >
        {short_description}
      </Typography>
    </Card>
  );
};

export default Post;
