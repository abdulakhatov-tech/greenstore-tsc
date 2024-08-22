import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useNotification } from "@tools/notification/notification";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const useBlogsServices = () => {
  const axios = useAxios();
  const { t } = useTranslation();
  const { blogId } = useParams();
  const { getParam } = useSearchParamsHook();
  const dispatchNotification = useNotification();

  const search = getParam("q")?.split("-").join(" ") ?? "";

  const blogs = useQueryHandler({
    queryKey: ["blogs", getParam("q")],
    queryFn: async () => {
      const { data } = await axios({
        url: "/user/blog",
        params: {
          search,
        },
      });

      return data?.data || [];
    },
    staleTime: 60000, // Cache data for 1 minute (adjust this value as needed)
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t("notification.error_message"),
        description: t("notification.error_description"),
      });
    },
  });

  const blogById = useQueryHandler({
    queryKey: ["blog-post", blogId],
    queryFn: async () => {
      const { data } = await axios({
        url: `/user/blog/${blogId}`,
      });

      return data?.data || null;
    },
  });

  return { blogs, blogById };
};

export default useBlogsServices;
