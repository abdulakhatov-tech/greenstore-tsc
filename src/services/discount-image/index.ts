import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useNotification } from "@tools/notification/notification";
import { useTranslation } from "react-i18next";

const useDiscountImageService = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const dispatchNotification = useNotification();

    const queryData = useQueryHandler({
      queryKey: ["discount-image"],
      queryFn: async () => {
        const { data } = await axios({
          url: "/features/discount",
        });
        return data?.data || null;
      },
      staleTime: 1000 * 60 * 15, // 15 minutes
      refetchInterval: 1000 * 60 * 15, // 15 minutes
      onError: (error: any) => {
        const errorMessage = error.message || t("notification.unknown_error");
        dispatchNotification({
          type: "error",
          message: errorMessage,
          description: t("notification.discount_image_error_description"),
        });
      }
    })
      
  return queryData;
};

export default useDiscountImageService;
