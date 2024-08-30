import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import ShoppingCartComponent from "@components/views/shopping-cart";

const ShoppingCart: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <ShoppingCartComponent />
    </Seo>
  );
};

export default ShoppingCart;
