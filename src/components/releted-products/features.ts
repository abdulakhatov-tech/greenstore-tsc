import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useAppSelector } from "@hooks/useRedux";

const useRelatedProductsFeatures = () => {
  const axios = useAxios();
  const { category } = useAppSelector(state => state.relatedProducts)

  const fetchRelatedProducts = async () => {
    const response = await axios({
      method: "GET",
      url: `/flower/category/${category ?? "house-plants"}`,
    });

    return response?.data?.data;
  };

  const queryResult = useQueryHandler({
    queryKey: ["relatedProducts", category],
    queryFn: fetchRelatedProducts,
  });

  return queryResult;
};

export default useRelatedProductsFeatures;
