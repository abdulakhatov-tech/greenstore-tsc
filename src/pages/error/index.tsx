import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import ErrorComponent from "@components/views/error";

const Error: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <ErrorComponent />
    </Seo>
  );
};

export default Error;
