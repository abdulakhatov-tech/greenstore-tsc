import useSearchParamsHook from "@hooks/useSearchParams";
import { useState } from "react";

const usePriceRangeFeatures = () => {
   const { setParams, getParam } = useSearchParamsHook();

   // range_min and range_max
   const range_min = parseInt(getParam("range_min") as string ?? 1, 10);
   const range_max = parseInt(getParam("range_max") as string ?? 1500, 10);
   // state for range slider value
   const [range, setRange] = useState<number[]>([range_min, range_max]);

   // range slider change event and update range state
   const onSliderChange = (newRange: number[]) => setRange(newRange);

   // filter button click event and update query parameters with new range values
   const filterHandler = () => {
      setParams({
         category: getParam("category") ?? "house-plants",
         range_min: range[0],
         range_max: range[1],
      });
   };

   return { range, onSliderChange, filterHandler, range_min, range_max };
};

export default usePriceRangeFeatures;
