import { useCallback } from "react";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useAppSelector } from "@hooks/useRedux";
import { AuthQueryT } from "../../types";
import { useNotification } from "@tools/notification/notification";

const useAuthHeaderFeatures = () => {
  const dispatchNotification = useNotification();
  const { setParam } = useSearchParamsHook();
  const { authModalVisibility } = useAppSelector((state) => state.modal);
  const { authQuery } = authModalVisibility;

  const authTypeHandler = useCallback((authType: AuthQueryT) => {
    try {
      setParam("auth", authType);
    } catch (error) {
      dispatchNotification({
        type: "error",
        message: (error as Error)?.message || "An unknown error occurred",
        description: "Failed to close the sidebar menu modal",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { authQuery, authTypeHandler };
};

export default useAuthHeaderFeatures;
