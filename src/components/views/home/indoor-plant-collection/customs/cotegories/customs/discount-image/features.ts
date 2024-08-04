import { useEffect, useState } from "react";

import useAxios from "@hooks/useAxios";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";
import { DiscountImagePropsI } from "./types";

const useDiscountImageFeatures = () => {
  const axios = useAxios();
  const dispatch = useAppDispatch();
  const [data, setData] = useState<DiscountImagePropsI | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDiscountImage = async () => {
    try {
      setImageLoading(true);
      const response = await axios({
        method: "GET",
        url: "/features/discount",
      });

      setData(response?.data?.data);
    } catch (error: any) {
      setError(error.message)
      dispatch(
        setNotification({
          type: "error",
          message: error.message,
          description: "Failed to fetch discount image",
        })
      );
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
