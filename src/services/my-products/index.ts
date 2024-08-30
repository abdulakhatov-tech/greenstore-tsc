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
          ...(authorId && { access_token: authorId })
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
      console.log(_id, category)

      const response = await axios({
        method: "DELETE",
        url: `/user/product/${category}`,
        data: { _id },
      });

      queryClient.setQueryData(["my-products"], (prev: any) => {
        console.log(prev, 'prev')
        return prev?.filter((item: any) => item?._id !== _id);
      });

      return response?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: 'Success',
        description: 'Product was successfully deleted',
      })
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: "Error",
        description: 'Product was not successfully deleted',
      })
    },
  });

  const addProduct = useMutation({
    mutationFn: async (product: AddingEditingProductI) => {

      // queryClient.setQueryData(['my-products'], (prev: any) => {
      //   return [...prev, product]
      // })

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
        message: 'Added',
        description: 'Product added successfully',
      })
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: 'Product not found',
        description: 'Something went wrong',
      })
    },
  });

  const updateProductByCategory = useMutation({
    mutationFn: async ({_id, category, data}: any) => {
      // Optimistically update the cache before the mutation
      queryClient.setQueryData(['my-products'], (prev: any) =>
        prev.map((item: any) => (item._id === _id ? { ...item, ...data } : item))
      );

      try {
        const response= await axios({
          method: "PUT",
          url: `/user/product/${category}`,
          data: { _id, data },
        })
  
        return response?.data?.data;
      } catch (error) {
        // Rollback the optimistic update in case of an error
        queryClient.invalidateQueries({ queryKey: ["my-products"] });
        throw error;
      }

    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: 'Successful',
        description: 'Product updated successfully',
      })
      queryClient.invalidateQueries({ queryKey: ["my-products"] });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: 'Error updating',
        description: 'Product not updated successfully',
      })
    }
  })

  return {
    myProducts,
    removeProduct: removeProduct.mutateAsync,
    addProduct: addProduct.mutateAsync,
    updateProductByCategory: updateProductByCategory.mutate
  };
};

export default useMyProductsService;
