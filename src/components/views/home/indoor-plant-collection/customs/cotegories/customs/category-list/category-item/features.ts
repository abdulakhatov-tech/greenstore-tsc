import useSearchParamsHook from "@hooks/useSearchParams";

type RoutePathT = {
    route_path: string;
};

const useCategoryItemFeatures = () => {
    const { setParam, getParam } = useSearchParamsHook();

   // getting the current selected category
   const selectedCategory = getParam("category") ?? "house-plants";

   // handling the click event to set the selected category query parameter
   const handleClick = ({ route_path }: RoutePathT) => {
      setParam("category", route_path);
   };

   return { selectedCategory, handleClick };
};

export default useCategoryItemFeatures;
