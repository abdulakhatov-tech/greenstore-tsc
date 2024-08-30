import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import AddressComponent from "@components/views/profile/address";

const Address: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <AddressComponent />
    </Seo>
  );
};

export default Address;
