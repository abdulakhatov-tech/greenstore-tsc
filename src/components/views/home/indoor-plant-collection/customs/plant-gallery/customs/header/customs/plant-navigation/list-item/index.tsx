import classNames from "classnames";
import { FC } from "react";

import useSearchParamsHook from "@hooks/useSearchParams";
import { ListItemPropsI } from "./types";
import Title from "@generic/typography";

const ListItem: FC<ListItemPropsI> = ({ title, slug }) => {
  const { setParam, getParam } = useSearchParamsHook();

  // current type query
  const activeType = getParam("type") ?? "all-plants";
  // setting type query
  const setActiveTypeHandler = () => setParam("type", slug);

  return (
    <li>
      <Title size='h5' 
        onClick={setActiveTypeHandler}
        className={classNames('pb-[2px]',{
          ["text-green font-bold border-b-[2px] border-green"]:
            slug === activeType,
          ["text-black font-normal border-b-[2px] border-transparent"]:
            slug !== activeType,
        })}
      >
        {title}
      </Title>
    </li>
  );
};

export default ListItem;
