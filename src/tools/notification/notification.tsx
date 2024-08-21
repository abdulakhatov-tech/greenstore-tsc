import { useCallback } from "react";

import { useAppDispatch } from "@hooks/useRedux";
import { NotificationPropsI } from "@type/index";
import { setNotification } from "@redux/slices/notification";

export const useNotification = () => {
    const dispatch = useAppDispatch();
  
    return useCallback(
      ({ type, message, description }: NotificationPropsI) => {
        dispatch(setNotification({ type, message, description }));
      },
      [dispatch]
    );
};