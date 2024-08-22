import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "@config/auth";
import useAxios from "@hooks/useAxios";
import { ProductPropsI } from "@type/index";
import useQueryHandler from "@hooks/useQueryHandler";
import { useNotification } from "@tools/notification/notification";

const useWishlistService = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const axios = useAxios();
  const { getUser, updateUser } = useAuth();
  const dispatchNotification = useNotification(); 

  const { user } = getUser();

  const wishlist = useQueryHandler({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: "/user/wishlist"
      });
      return response?.data?.data.filter((item: any) => Boolean(item)) || [];
    },
    onError: (error) => {
      dispatchNotification({
        type: "error",
        message: t('notification.wishlist_error_message'),
        description: error.message ?? t('notification.wishlist_error_description'),
      });
    },
    retry: 2,
  });

  const addCartItemToWishlist = useMutation({
    mutationFn: async (product: ProductPropsI) => {

      const { _id, category } = product;

      queryClient.setQueryData(['wishlist'], (prev: any) => {
        console.log(prev, product, 'previous')
        return [...prev, product]
      } );
      
      const response = await axios({
        method: "POST",
        url: "/user/create-wishlist",
        data: { flower_id: _id, route_path: category },
      });

      return response?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: t('notification.product_added_to_wishlist_success_message'),
        description: t('notification.product_added_to_wishlist_success_description'),
      });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error) => {
      if (error.message === "Product already in wishlist") {
        dispatchNotification({
          type: "warning",
          message: error?.message || t('notification.product_already_in_wishlist_message'),
          description: t('notification.product_already_in_wishlist_description'),
        });
      } else {
        dispatchNotification({
          type: "error",
          message: t('notification.product_added_to_wishlist_error_message'),
          description: t('notification.product_added_to_wishlist_error_description'),
        });
      }
    },
  });

  const removeFromWishlist = useMutation({
    mutationFn: async (product: ProductPropsI) => {
      const { _id } = product;

      queryClient.setQueryData(['wishlist'], (prev: ProductPropsI[]) => {
        return prev.filter(item => item?._id !== _id)
      })

      updateUser({
        setter: {
          ...user,
          wishlist: user?.wishlist?.filter((item: any) => item?._id!== _id),
        }
      })

      const response = await axios({
        method: "DELETE",
        url: `/user/delete-wishlist`,
        data: { _id }
      });      

      return response?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: t('notification.product_removed_from_wishlist_success_message'),
        description: t("notification.product_removed_from_wishlist_success_description"),
      }),
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t('notification.product_removed_from_wishlist_error_message'),
        description: t('notification.product_removed_from_wishlist_error_description'),
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
