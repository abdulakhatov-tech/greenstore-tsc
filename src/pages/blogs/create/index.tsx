import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import BlogPostForm from "@components/views/blogs/form";

const CreateBlog: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <BlogPostForm />
    </Seo>
  );
};

export default CreateBlog;
