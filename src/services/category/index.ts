import { useTranslation } from "react-i18next";

import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useNotification } from "@tools/notification/notification";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@hooks/useRedux";

const useCategoryService = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const dispatchNotification = useNotification();
  const queryClient = useQueryClient();
  const { user } = useAppSelector(({ auth }) => auth);

  const created_by = user?._id;

  const category = useQueryHandler({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: "/flower/category",
      });
      return data?.data || [];
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.category_error_message"),
        description: t("notification.category_error_description"),
      });
    },
  });

  const getAllCategoriesCreatedBy = useQueryHandler({
    queryKey: ["categoryByAuthor", { created_by }],
    queryFn: async () => {
      const { data } = await axios({
        method: "GET",
        url: `/flower/category/${created_by}`,
        params: {
          access_token: created_by,
        },
      });

      return data?.data || [];
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: "Category creation failed",
        description: "Category creation failed",
      });
    },
  });

  const createCategory = useMutation({
    mutationFn: async (title: string) => {
      const { data } = await axios({
        method: "POST",
        url: "/flower/category",
        data: { title },
      });
      return data?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: "Category",
        description: "Category created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["category"] });
      queryClient.invalidateQueries({ queryKey: ["categoryByAuthor"] });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: "Failed to create category",
        description: "Failed to create category",
      });
    },
  });

  const deleteCategoryById = useMutation({
    mutationFn: async (categoryId: string) => {
      await axios({
        method: "DELETE",
        url: `/flower/category`,
        data: { _id: categoryId },
        params: {
          access_token: created_by,
        },
      });
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: "Deleted",
        description: "Deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["category"] });
      queryClient.invalidateQueries({
        queryKey: ["categoryByAuthor", { created_by }],
      });
    },
    onError: (error) => {
      console.log(error)
      dispatchNotification({
        type: "error",
        message: t("notification.category_delete_error_message"),
        description: t("notification.category_delete_error_description"),
      });
    },
  });

  return {
    ...category,
    getAllCategoriesCreatedBy,
    createCategory: createCategory.mutate,
    deleteCategoryById: deleteCategoryById.mutate,
  };
};

export default useCategoryService;
