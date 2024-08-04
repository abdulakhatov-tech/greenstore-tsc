import { Select } from "antd";
import { FC } from "react";

import { MockData } from "@utils/index";
import useSearchParamsHook from "@hooks/useSearchParams";

const SelectBy: FC = () => {
  const { plant_gallery_navigation } = MockData();
  const { setParam, getParam } = useSearchParamsHook();

  const options = plant_gallery_navigation.map((item) => ({
    value: item.slug,
    label: item.title,
  }));

  // current type query
  const activeType = getParam("type") ?? "all-plants";
  // setting type query
  const setActiveTypeHandler = (slug: string) => setParam("type", slug);

  return (
    <Select
      options={options}
      defaultValue={activeType}
      className={
        "text-[15px] font-normal leading-4 w-[150px] h-[28px] sm:w-[140px] sm:h-[32px]"
      }
      onChange={(e) => setActiveTypeHandler(e)}
    />
  );
};

export default SelectBy;
