import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

import useAxios from "@hooks/useAxios";
import { useAppDispatch } from "@hooks/useRedux";
import useQueryHandler from "@hooks/useQueryHandler";
import { setNotification } from "@redux/slices/notification";
import { NotificationPropsI, ProductPropsI } from "@type/index";

const useWishlistService = () => {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  // function for dispatching notifications
  const dispatchNotification = useCallback(
    ({ type, message, description }: NotificationPropsI) => {
      dispatch(setNotification({ type, message, description }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const wishlist = useQueryHandler({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: "/user/wishlist",
      });
      return response?.data?.data;
    },
    onError: (error) => {
      dispatchNotification({
        type: "error",
        message: "Failed to fetch wishlist",
        description: error.message,
      });
    },
    retry: 2,
  });

  const addCartItemToWishlist = useMutation({
    mutationFn: async (product: ProductPropsI) => {

      const { _id, category } = product;

      const response = await axios({
        method: "POST",
        url: "/user/create-wishlist",
        data: { flower_id: _id, route_path: category },
      });

      return response?.data;
    },
    onSuccess: (_, variables) => {
      dispatchNotification({
        type: "success",
        message: "Product added to wishlist",
        description: `You added ${variables.title} to your wishlist`,
      });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error, variables) => {
      if (error.message === "Product already in wishlist") {
        dispatchNotification({
          type: "warning",
          message: error.message || "Product already in wishlist",
          description: `The product ${variables.title} is already in your wishlist`,
        });
      } else {
        dispatchNotification({
          type: "error",
          message: "Failed to add product to wishlist",
          description: `Failed to add ${variables.title} to your wishlist: ${error.message}`,
        });
      }
    },
  });

  const removeFromWishlist = useMutation({
    mutationFn: async (product: ProductPropsI) => {
      const { _id } = product;

      const response = await axios({
        method: "DELETE",
        url: `/user/delete-wishlist`,
        data: { _id },
      });

      return response?.data;
    },
    onSuccess: (_, variables) => {
      dispatchNotification({
        type: "success",
        message: "Product removed from wishlist",
        description: `You removed ${variables.title} from your wishlist`,
      }),
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error, variables) => {
      dispatchNotification({
        type: "error",
        message: "Failed to remove product from wishlist",
        description: `Failed to remove ${variables.title} from your wishlist: ${error.message}`,
      });
    },
  });

  return {
    wishlist,
    addCartItemToWishlist: addCartItemToWishlist.mutateAsync,
    removeFromWishlist: removeFromWishlist.mutateAsync,
  };
};

export default useWishlistService;
