import { useParams } from "react-router-dom";
import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";

const useProductFeatures = () => {
   const { category, productId } = useParams();
   const axios = useAxios();

   const product = useQueryHandler({
      queryKey: [`shop/product/${category}/${productId}`],
      queryFn: async () => {
         const { data } = await axios({
            method: "GET",
            url: `/flower/category/${category}/${productId}`,
         });

         return data?.data;
      }
   });

   const user = useQueryHandler({
      queryKey: [`user/${product?.data?.created_by}`],
      queryFn: async () => {
         const { data } = await axios({
            method: "GET",
            url: `/user/by_id/${product?.data?.created_by}`,
         });

         return data?.data
      },
      enabled: product?.data
   });

   return { product, user };
};
export default useProductFeatures;
