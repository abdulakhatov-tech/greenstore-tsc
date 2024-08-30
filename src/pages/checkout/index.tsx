import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import CheckoutComponent from "@components/views/checkout";

const Checkout: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <CheckoutComponent />
    </Seo>
  );
};

export default Checkout;
