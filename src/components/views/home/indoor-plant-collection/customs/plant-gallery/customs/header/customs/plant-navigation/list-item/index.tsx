import classNames from "classnames";
import { FC } from "react";

import useSearchParamsHook from "@hooks/useSearchParams";
import { ListItemPropsI } from "./types";

const ListItem: FC<ListItemPropsI> = ({ title, slug }) => {
  const { setParam, getParam } = useSearchParamsHook();

  // current type query
  const activeType = getParam("type") ?? "all-plants";
  // setting type query
  const setActiveTypeHandler = () => setParam("type", slug);

  return (
    <li>
      <span
        onClick={setActiveTypeHandler}
        className={classNames('text-[13px] md:text-[14px] lg:text-[15px] leading-4 pb-[2px]',{
          ["text-green font-bold border-b-[2px] border-green"]:
            slug === activeType,
          ["text-black font-normal border-b-[2px] border-transparent"]:
            slug !== activeType,
        })}
      >
        {title}
      </span>
    </li>
  );
};

export default ListItem;
