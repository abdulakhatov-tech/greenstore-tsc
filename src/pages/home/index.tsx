import { FC } from "react";

import Seo from "@components/seo";
import { SeoPropsT } from "@type/index";
import HomeComponent from "@components/views/home";

const Home: FC<{ meta: SeoPropsT }> = ({ meta }) => {
  return (
    <Seo {...meta}>
      <HomeComponent />
    </Seo>
  );
};

export default Home;
