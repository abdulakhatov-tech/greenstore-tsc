import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import MyProductsComponent from "@components/views/profile/my-products";

const MyProducts: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <MyProductsComponent />
    </Seo>
  );
};

export default MyProducts;
