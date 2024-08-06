import useSearchParamsHook from "@hooks/useSearchParams";
import { useEffect, useState } from "react";

const usePriceRangeFeatures = () => {
  const { setParams, getParam, removeParam } = useSearchParamsHook();

  // range_min and range_max
  const range_min = parseInt((getParam("range_min") as string) ?? 1, 10);
  const range_max = parseInt((getParam("range_max") as string) ?? 1500, 10);
  // state for range slider value
  const [range, setRange] = useState<number[]>([range_min, range_max]);

  useEffect(() => {
    if (range_min < 1 || range_max > 1500) {
      setParams({ range_min: 1, range_max: 1500 });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range_min, range_max]);

  // range slider change event and update range state
  const onSliderChange = (newRange: number[]) => setRange(newRange);

  // filter button click event and update query parameters with new range values
  const filterHandler = () => {
    if(range[0] || range[1] || getParam('category') || getParam('type')) {
      setParams({
        category: getParam("category") ?? "house-plants",
        range_min: range[0],
        range_max: range[1],
        type: getParam("type") ?? "all-plants",
      });
    }

  };

  const resetHandler = () => {
    setRange([1, 1500]);

    setParams({
      category: "house-plants",
      range_min: 0,
      range_max: 1500,
      type: "all-plants",
    });

    removeParam("category");
    removeParam("range_min");
    removeParam("range_max");
    removeParam("type");
  };

  return {
    range,
    onSliderChange,
    filterHandler,
    resetHandler,
    range_min,
    range_max,
  };
};

export default usePriceRangeFeatures;
