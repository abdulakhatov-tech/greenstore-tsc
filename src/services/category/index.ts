import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useNotification } from "@tools/notification/notification";
import { useTranslation } from "react-i18next";

const useCategoryService = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const dispatchNotification = useNotification();

  const categories = useQueryHandler({
    queryKey: ["categories"],
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
        message: t('notification.category_error_message'),
        description: t('notification.category_error_description'),
      });
    },
  });

  return { ...categories };
};

export default useCategoryService;
