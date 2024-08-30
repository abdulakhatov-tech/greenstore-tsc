import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import NotFoundComponent from "@components/views/not-found";

const NotFound: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <NotFoundComponent />
    </Seo>
  );
};

export default NotFound;
