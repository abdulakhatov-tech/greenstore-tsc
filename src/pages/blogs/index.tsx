import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import BlogsComponent from "@components/views/blogs";

const Blogs: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <BlogsComponent />
    </Seo>
  );
};

export default Blogs;
