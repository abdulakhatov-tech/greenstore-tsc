import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import BlogPostComponent from "@components/views/blogs/blog-post";

const BlogPost: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <BlogPostComponent />
    </Seo>
  );
};

export default BlogPost;
