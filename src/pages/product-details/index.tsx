import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import ProductDetailsComponent from "@components/views/product-details";

const ProductDetails: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <ProductDetailsComponent />
    </Seo>
  );
};

export default ProductDetails;
