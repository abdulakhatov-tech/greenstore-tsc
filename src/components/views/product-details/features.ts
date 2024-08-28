import { useParams } from "react-router-dom";
import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useQueryClient } from "@tanstack/react-query";

const useProductFeatures = () => {
   const { category, productId } = useParams();
   const axios = useAxios();
   const queryClient = useQueryClient();

   const product = useQueryHandler({
      queryKey: [`product/${category}/${productId}`],
      queryFn: async () => {
         const { data } = await axios({
            method: "GET",
            url: `/flower/category/${category}/${productId}`,
         });

         return data?.data;
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [`product/${category}/${productId}`] })
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
      enabled: product?.data,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [`product/${product?.data?.created_by}`] })
      }
   });

   return { product, user };
};
export default useProductFeatures;
