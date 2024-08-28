import { useTranslation } from "react-i18next";

import useAxios from "@hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { useNotification } from "@tools/notification/notification";
import { EmailT } from "./types";

const useEmailSubscripition = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const dispatchNotification = useNotification();

  const subscribeToNewsletter = useMutation({
    mutationFn: async (data: EmailT) => {
      await axios({
        url: "/features/email-subscribe",
        method: "POST",
        data,
      });
    },
    onSuccess: (response: any) => {
      dispatchNotification({
        type: "success",
        message: response?.extraMessage || t("notification.newsletter_success_message"),
        description: t("notification.newsletter_success_description"),
      });
    },
    onError: (error: any) => {
      const errorMessage =
        error instanceof Error
          ? error.message
          : t("notification.newsletter_error_message");

      dispatchNotification({
        type: "error",
        message: errorMessage,
        description: t("notification.newsletter_error_description"),
      });
    },
  });

  return { subscribeToNewsletter: subscribeToNewsletter.mutate };
};

export default useEmailSubscripition;
