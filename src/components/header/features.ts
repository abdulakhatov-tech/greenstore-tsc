import { useAppDispatch } from "@hooks/useRedux";
import { toggleSearchbar } from "@redux/slices/search";
import { UseHeaderFeaturesT } from "./types";

const useHeaderFeatures = (): UseHeaderFeaturesT => {
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(toggleSearchbar());
  };

  return {
    handleSearch,
  };
};

export default useHeaderFeatures;
