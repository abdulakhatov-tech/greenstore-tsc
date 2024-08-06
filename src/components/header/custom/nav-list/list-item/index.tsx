import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { FC } from "react";

import { ListItemT } from "../../../types";

const ListItem: FC<ListItemT> = ({ label, path, isMobile }) => {
  return (
    <li className='h-full'>
      <NavLink
        to={path}
        className={({ isActive }) =>
          classNames("h-full flex items-center text-[16px] leading-5", {
            ["font-bold text-green active:text-green hover:text-green"]:
              isActive,
            ["font-semibold text-black hover:text-green hover:border-b-[1px] hover:border-b-green"]:
              !isActive && !isMobile,
            ["font-semibold"]: !isActive && !isMobile,
            ["border-b-[2px] border-green lg:pb-0"]: isActive && !isMobile,
            ["border-l-[3px] border-l-green pl-1"]: isActive && isMobile,
            ['hover:border-l-[3px] hover:border-l-green hover:text-green hover:font-bold pl-1']: !isActive && isMobile
          })
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default ListItem;
