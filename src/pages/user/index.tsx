import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import UserComponent from "@components/views/user";

const User: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <UserComponent />
    </Seo>
  );
};

export default User;
