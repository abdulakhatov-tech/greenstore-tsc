import { FC } from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "@generic/breadcrumbs";
import { RoutesI } from "./types";

const Header: FC = () => {
  const { category, productId } = useParams();

  const routes: RoutesI[] = [
    {
      breadcrumbName: "Home",
      path: "/",
    },
    {
      breadcrumbName: 'Flower',
      path: `/product/${category}/${productId}`,
    },
  ];

  return <Breadcrumbs routes={routes} />;
};

export default Header;
