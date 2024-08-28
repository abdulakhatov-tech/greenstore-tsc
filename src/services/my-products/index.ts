import { useTranslation } from "react-i18next";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { AddingEditingProductI, ProductPropsI } from "@type/index";
import { useNotification } from "@tools/notification/notification";
import { useParams } from "react-router-dom";

const useMyProductsService = () => {
  const axios = useAxios();
  const { authorId } = useParams();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const dispatchNotification = useNotification();

  const myProducts = useQueryHandler({
    queryKey: ["my-products"],
    queryFn: async () => {
      const { data } = await axios({ 
        url: "/user/products",
        params: {
          access_token: authorId && authorId
        }
       });

      return data?.data || [];
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t('notification.products_error_message'),
        description: t('notification.products_error_description'),
      });
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

      queryClient.setQueryData(["my-products"], (prev: any) => {
        return prev?.filter((item: any) => item?._id !== _id);
      });

      return response?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: t('notification.remove_product_success_message'),
        description: t('notification.remove_product_success_description'),
      })
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t('notification.remove_product_error_message'),
        description: t('notification.remove_product_error_description'),
      })
    },
  });

  const addProduct = useMutation({
    mutationFn: async (product: AddingEditingProductI) => {
      const { data } = await axios({
        method: "POST",
        url: `/flower/category/${product?.category}`,
        data: product,
      });

      return data?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: t('notification.add_product_success_message'),
        description: t('notification.add_product_success_description'),
      })
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.add_product_error_message"),
        description: t("notification.add_product_error_description"),
      })
    },
  });

  

  return {
    myProducts,
    removeProduct: removeProduct.mutateAsync,
    addProduct: addProduct.mutateAsync,
  };
};

export default useMyProductsService;
