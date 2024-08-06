import { Select } from "antd";
import classNames from "classnames";

import { MockData } from "@utils/index";
import { SortByPropsT } from "./types";
import useSearchParamsHook from "@hooks/useSearchParams";
import { SortCategoryByT } from "@type/index";

const SortBy: React.FC<SortByPropsT> = ({ className }) => {
  const { sortByOptions } = MockData();
  const { setParam, getParam } = useSearchParamsHook();
  const sort = (getParam("sort") ?? "default-sorting") as SortCategoryByT;

  const setSortType = (type: SortCategoryByT) => setParam("sort", type);

  return (
    <Select
      id="sort-by"
      defaultValue={sort}
      options={sortByOptions}
      className={classNames("text-[15px] font-normal leading-4", {
        ["w-[100px] h-[28px] sm:w-[140px] sm:h-[32px] hidden md:block"]: !className,
        [className as string]: className,
      })}
      onChange={setSortType}
    />
  );
};

export default SortBy;
