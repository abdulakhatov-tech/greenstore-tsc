import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotification } from "@tools/notification/notification";
import { BlogDataT } from "@type/index";

const useBlogsServices = () => {
  const axios = useAxios();
  const { t } = useTranslation();
  const { blogId } = useParams();
  const { getParam } = useSearchParamsHook();
  const dispatchNotification = useNotification();
  const queryClient = useQueryClient();

  const search = getParam("q")?.split("-").join(" ") ?? "";

  const getAllBlogs = useQueryHandler({
    queryKey: ["blogs", getParam("q")],
    queryFn: async () => {
      const { data } = await axios({
        url: "/user/blog",
        params: {
          search,
        },
      });

      return data?.data.reverse() || [];
    },
    staleTime: 60000, // Cache data for 1 minute (adjust this value as needed)
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.blog_get_blogs_message"),
        description: t("notification.blog_get_blogs_description"),
      });
    },
  });

  const getBlogById = useQueryHandler({
    queryKey: ["getBlogById", blogId],
    queryFn: async () => {
      if (!blogId) return null;

      const { data } = await axios({
        url: `/user/blog/${blogId}`,
      });

      return data?.data || null;
    },
    enabled: !!blogId,
  });

  const deleteBlogById = useMutation({
    mutationFn: async (blogId) => {
      queryClient.setQueryData(["blogs"], (prev: any) =>
        prev?.filter((item: any) => item._id !== blogId)
      );

      await axios({
        method: "DELETE",
        url: "/user/blog",
        data: { _id: blogId },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      dispatchNotification({
        type: "success",
        message: t("notification.blog_delete_success_message"),
        description: t("notification.blog_delete_success_description"),
      });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.blog_delete_error_message"),
        description: t("notification.blog_delete_error_description"),
      });
    },
  });

  const createBlog = useMutation({
    mutationFn: async (blogData: BlogDataT) => {
      const { data } = await axios({
        method: "POST",
        url: "/user/blog",
        data: blogData,
      });

      // queryClient.setQueryData(['blogs'], (prev: any) => {
      //   return prev.push(blogData)
      // });

      return data?.data || null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      dispatchNotification({
        type: "success",
        message: t("notification.blog_create_success_message"),
        description: t("notification.blog_create_success_description"),
      });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.blog_create_error_message"),
        description: t("notification.blog_create_error_description"),
      });
    },
  });

  const editBlogById = useMutation({
    mutationFn: async (blogData: BlogDataT) => {
      const { data } = await axios({
        method: "PUT",
        url: `/user/blog`,
        data: { _id: blogId, ...blogData },
      });

      return data?.data || null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      dispatchNotification({
        type: "success",
        message: t("notification.blog_edit_success_message"),
        description: t("notification.blog_edit_success_description"),
      });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.blog_edit_error_message"),
        description: t("notification.blog_edit_error_description"),
      });
    },
  });

  const viewBlogById = useMutation({
    mutationFn: async (blogData: any) => {
      const { data } = await axios({
        method: "PUT",
        url: `/user/blog/view`,
        data: { _id: blogId, ...blogData },
      });

      queryClient.setQueryData(["blogs"], (prev: any) => {
        return prev.map((item: any) => (item._id === blogId ? blogData : item));
      });

      return data?.data;
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.blog_view_error_message"),
        description: t("notification.blog_view_error_description"),
      });
    },
  });

  return {
    getAllBlogs,
    getBlogById,
    deleteBlogById: deleteBlogById.mutate,
    createBlog: createBlog.mutate,
    editBlogById: editBlogById.mutate,
    viewBlogById: viewBlogById.mutate,
  };
};

export default useBlogsServices;
