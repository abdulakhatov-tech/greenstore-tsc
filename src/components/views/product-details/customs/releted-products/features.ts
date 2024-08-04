import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useParams } from "react-router-dom";

const useRelatedProductsFeatures = () => {
  const { category } = useParams();
  const axios = useAxios();
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
