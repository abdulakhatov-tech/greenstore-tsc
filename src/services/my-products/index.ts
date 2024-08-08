import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";
import { ProductPropsI } from "@type/index";

const useMyProductsService = () => {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const myProducts = useQueryHandler({
    queryKey: ["my-products"],
    queryFn: async () => {
      const { data } = await axios({ url: "/user/products" });

      return data?.data || [];
    },
    onError: () => {
      dispatch(
        setNotification({
          type: "error",
          message: "Failed to fetch my products",
        })
      );
    },
  });

  const removeProduct = useMutation({
    mutationFn: async (product: ProductPropsI) => {
      const { _id, category } = product;

      const response = await axios({
        method: "DELETE",
        url: `/user/product/${category}`,
        data: { _id },
     });

     return response?.data;
    },
    onSuccess: () => {
      dispatch(
        setNotification({
          type: "success",
          message: "Product removed successfully",
        })
      );
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
    onError: (error: any) => {
      dispatch(
        setNotification({
          type: "error",
          message: "Failed to remove product",
          description: error.message,
        })
      );
    },
  });

  return { myProducts, removeProduct: removeProduct.mutateAsync };
};

export default useMyProductsService;
