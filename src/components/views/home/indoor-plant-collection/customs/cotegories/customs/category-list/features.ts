import useCategoryService from "@services/category";

const useCategoryListFeatures = () => {
  const queryRequest = useCategoryService();

  return queryRequest;
};

export default useCategoryListFeatures;
