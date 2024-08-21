import { useTranslation } from "react-i18next";

import useAxios from "@hooks/useAxios";
import useQueryHandler from "@hooks/useQueryHandler";
import { useNotification } from "@tools/notification/notification";

const useTrackOrderService = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const dispatchNotification = useNotification();

  const orders = useQueryHandler({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axios({
        url: "/order/get-order",
      });

      return response.data.data || [];
    },
    onError: (error) => {
      dispatchNotification({
        type: "error",
        message: t('notification.order_error_message'),
        description: error?.message ?? t('notification.order_error_description'),
      });
      return [];
    },
  });

  return { orders };
};

export default useTrackOrderService;
