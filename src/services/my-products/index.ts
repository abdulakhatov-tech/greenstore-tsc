import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";
import { AddingEditingProductI } from "@type/index";

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

  const addProduct = useMutation({
    mutationFn: async(product: AddingEditingProductI) => {
      const { data } = await axios({
        method: "POST",
        url: `/flower/category/${product?.category}`,
        data: product,
      });

      return data?.data;
    },
    onSuccess: () => {
      dispatch(
        setNotification({
          type: "success",
          message: "Product added successfully",
        })
      );
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
    onError: () => {
      dispatch(
        setNotification({
          type: "error",
          message: "Failed to add product",
        })
      );
    }
  })

  return { myProducts, removeProduct: removeProduct.mutateAsync, addProduct: addProduct.mutateAsync };
};

export default useMyProductsService;
