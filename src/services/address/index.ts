import { useMutation } from "@tanstack/react-query";

import useAxios from "@hooks/useAxios";
import { useNotification } from "@tools/notification/notification";
import { AddressDataI } from "@type/index";
import { useTranslation } from "react-i18next";

const useAddressService = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const dispatchNotification = useNotification();

  const { mutateAsync: postAddress } = useMutation({
    mutationFn: async (address: AddressDataI) => {
      const response = await axios({
        method: "POST",
        url: "/user/address",
        data: address,
      });

      return response?.data;
    },
    onSuccess: () => {
      dispatchNotification({
        type: "success",
        message: t('notification.address_success_message'),
        description: t('notification.address_success_description'),
      });
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        t('notification.address_error_description');

      dispatchNotification({
        type: "error",
        message: t('notification.address_error_message'),
        description: errorMessage,
      });
    },
  });

  return { postAddress };
};

export default useAddressService;
