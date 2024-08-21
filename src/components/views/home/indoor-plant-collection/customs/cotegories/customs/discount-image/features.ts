import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import useAxios from "@hooks/useAxios";
import { DiscountImagePropsI } from "./types";
import { useNotification } from "@tools/notification/notification";

const useDiscountImageFeatures = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const dispatchNotification = useNotification();
  const [data, setData] = useState<DiscountImagePropsI | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDiscountImage = async () => {
    try {
      setImageLoading(true);
      const response = await axios({
        url: "/features/discount",
      });

      setData(response?.data?.data);
    } catch (error: any) {
      setError(error.message);
      dispatchNotification({
        type: "error",
        message: error.message,
        description: t("notification.discount_image_error_description"),
      });
    } finally {
      setImageLoading(false);
    }
  };

  useEffect(() => {
    if (!imageLoading) {
      fetchDiscountImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, imageLoading, error };
};

export default useDiscountImageFeatures;
