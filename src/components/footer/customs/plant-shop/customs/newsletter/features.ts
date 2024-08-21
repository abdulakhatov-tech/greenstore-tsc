import { useState } from "react";
import { useTranslation } from "react-i18next";

import useAxios from "@hooks/useAxios";
import { useNotification } from "@tools/notification/notification";

const useNewsletterFeatures = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const dispatchNotification = useNotification();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios({
        method: "POST",
        url: "/features/email-subscribe",
        data: { email: e.target[0].value },
      });

      dispatchNotification({
        type: "success",
        message: t("notification.newsletter_success_message"),
        description:
          response?.data?.extraMessage ??
          t("notification.newsletter_success_description"),
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : t("notification.newsletter_error_message");

      dispatchNotification({
        type: "error",
        message: errorMessage,
        description: t("notification.newsletter_error_description"),
      });
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  return { onSubmit, loading };
};

export default useNewsletterFeatures;
