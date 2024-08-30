import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import AccountDetailsComponent from "@components/views/profile/account-details";

const AccountDetails: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <AccountDetailsComponent />
    </Seo>
  );
};

export default AccountDetails;
