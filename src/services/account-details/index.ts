import { useTranslation } from "react-i18next"; 

import useAxios from "@hooks/useAxios";
import { AccountDetailsUserI } from "@type/index";
import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@tools/notification/notification";

const useAccountDetailsService = () => {
  const { t } = useTranslation();
  const dispatchNotification = useNotification();
  const axios = useAxios();

  const postAccountDetails = useMutation({
    mutationFn: async (user: AccountDetailsUserI) => {
      const response = await axios({
        method: "POST",
        url: "/user/account-details",
        data: user,
      });

      return response?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: t('notification.account_details_success_message'),
        description: t('notification.account_details_success_description'),
      });
    },
    onError: () => {
      dispatchNotification({
        type: "error",
        message: t('notification.account_details_error_message'),
        description: t('notification.account_details_error_description'),
      });
    },
  });

  return { postAccountDetails: postAccountDetails.mutateAsync };
};

export default useAccountDetailsService;
