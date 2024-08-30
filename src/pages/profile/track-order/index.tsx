import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import TrackOrderComponent from "@components/views/profile/track-order";

const TrackOrder: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <TrackOrderComponent />
    </Seo>
  );
};

export default TrackOrder;
