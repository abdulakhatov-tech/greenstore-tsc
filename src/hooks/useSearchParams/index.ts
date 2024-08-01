import { useSearchParams } from "react-router-dom";
import { setNotification } from "@redux/slices/notification";
import { useAppDispatch } from "@hooks/useRedux";
import { NotificationPayloadT } from "./types";

const useSearchParamsHook = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const setParam = (key: string, value: string) => {
    if (typeof key !== "string" || typeof value !== "string") {
      dispatch(
        setNotification({
          type: "error",
          message: `Invalid key or value: ${key} - ${value}`,
          description: `setParam() expects a string key and value`,
        } as NotificationPayloadT)
      );
      return;
    }

    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  const getParam = (key: string): string | null => {
    if (typeof key !== "string" || !key) {
      dispatch(
        setNotification({
          type: "error",
          message: `Invalid key: ${key}`,
          description: `getParam() expects a string key`,
        } as NotificationPayloadT)
      );
      return null;
    }

    return searchParams.get(key);
  };

  const setParams = (params: Record<string, string | number>) => {
    if (typeof params !== "object" || typeof params == "string") {
      dispatch(
        setNotification({
          type: "error",
          message: `Invalid params: ${params}`,
          description: `setParams() expects an object`,
        } as NotificationPayloadT)
      );
      return;
    }

    Object.keys(params).forEach((key) => {
      if (
        typeof key !== "string" ||
        (typeof params[key] !== "string" && typeof params[key] !== "number")
      ) {
        dispatch(
          setNotification({
            type: "error",
            message: `Invalid value for key: ${key} - ${params[key]}`,
            description: `setParams() expects string or number values for each key`,
          } as NotificationPayloadT)
        );
        return;
      }

      searchParams.set(key, params[key].toString());
    });

    setSearchParams(searchParams);
  };

  const getParams = (): Record<string, string> => {
    const params: Record<string, string> = {};

    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    return params;
  };

  const removeParam = (key: string) => {
    if (typeof key !== "string" || !key) {
      dispatch(
        setNotification({
          type: "error",
          message: `Invalid key: ${key}`,
          description: `removeParam() expects a string key`,
        } as NotificationPayloadT)
      );
      return;
    }

    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const removeParams = (keys: string[]) => {
    if (!Array.isArray(keys) || keys.some((key) => typeof key !== "string")) {
      dispatch(
        setNotification({
          type: "error",
          message: "Keys must be an array of strings!",
          description: `removeParams() expects an array of string keys`,
        } as NotificationPayloadT)
      );
      return;
    }

    keys.forEach((key) => searchParams.delete(key));
    setSearchParams(searchParams);
  };

  const clearParams = () => {
    const allParams = getParams();

    Object.keys(allParams).forEach((key) => searchParams.delete(key));
    setSearchParams(searchParams);
  };

  return {
    setParam,
    getParam,
    setParams,
    getParams,
    removeParam,
    removeParams,
    clearParams,
  };
};

export default useSearchParamsHook;
