import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import ProfileComponent from "@components/views/profile";

const Profile: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <ProfileComponent />
    </Seo>
  );
};

export default Profile;
