import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import WishlistComponent from "@components/views/profile/wishlist";

const Wishlist: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <WishlistComponent />
    </Seo>
  );
};

export default Wishlist;
