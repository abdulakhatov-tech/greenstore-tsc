import classNames from "classnames";

import { FC } from "react";

import useAppRoutes from "@utils/app-routes";
import ListItem from "./list-item";
import { NavListPropsI } from "../../types";

const NavList:FC<NavListPropsI> = ({ isMobile = false}) => {
  const { appRoutes } = useAppRoutes();

  return <ul className={classNames({
    ['flex flex-col gap-[20px]']: isMobile,
    ['hidden lg:flex items-center lg:gap-[30px] xl:gap-[45px] h-full']: !isMobile
  })}>
    {appRoutes?.map(
            (item) =>
               !item.hidden && (
                  <ListItem key={item?._id} {...item} isMobile={isMobile} />
               ),
         )}

  </ul>;
};

export default NavList;
