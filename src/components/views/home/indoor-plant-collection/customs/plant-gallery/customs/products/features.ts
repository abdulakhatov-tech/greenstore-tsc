/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";

import useAxios from "@hooks/useAxios";
import { useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";
import useQueryHandler from "@hooks/useQueryHandler";


const usePlantGallerProductsFeatures = () => {
  const { plant_gallery_layout } = useAppSelector((state) => state?.layout)
  const axios = useAxios();
  const { getParam } = useSearchParamsHook();

  const defaultParams = useMemo(
    () => ({
      type: "all-plants",
      category: "house-plants",
      range_min: 1,
      range_max: 1500,
      sort: "default-sorting",
    }),
    []
  );

  const getInitialQueryParams = () => ({
    category: getParam("category") ?? defaultParams.category,
    range_min: getParam("range_min") ?? defaultParams.range_min,
    range_max: getParam("range_max") ?? defaultParams.range_max,
    sort: getParam("sort") ?? defaultParams.sort,
    type: getParam('type')?? defaultParams.type,  
  });

  const [queryParams, setQueryParams] = useState(getInitialQueryParams);

  useEffect(() => {
    setQueryParams(getInitialQueryParams());

    return () => {};

  }, [
    getParam("category"),
    getParam("range_min"),
    getParam("range_max"),
    getParam("sort"),
    getParam('type'),
    defaultParams,
  ]);

  // fetching data
  const fetchProducts = async () => {
    const { data } = await axios({
      url: `/flower/category/${queryParams?.category}`,
      params: queryParams,
    });
    return data?.data;
  };

  // flower/category/house-plants
  const queryResult = useQueryHandler({
    queryKey: [defaultParams.category, queryParams, plant_gallery_layout],
    queryFn: fetchProducts,
  });

  return queryResult;
};

export default usePlantGallerProductsFeatures;