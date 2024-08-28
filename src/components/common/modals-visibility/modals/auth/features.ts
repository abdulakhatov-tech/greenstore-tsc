import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";

import {
  AuthQueryT,
  InitialStateT,
  UseAuthModalFeaturesT,
  FormValueT,
  ErrorT,
  ResponseT,
} from "./types";
import useAxios from "@hooks/useAxios";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useNotification } from "@tools/notification/notification";
import { useAppDispatch } from "@hooks/useRedux";
import { signIn, signUp } from "@redux/slices/auth";

// Define initial form values for both sign-in and sign-up
const initialValues: InitialStateT = {
  "sign-in": {
    email: "",
    password: "",
  },
  "sign-up": {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

const useAuthModalFeatures = (): UseAuthModalFeaturesT => {
  const { t } = useTranslation();
  const axios = useAxios();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const dispatchNotification = useNotification();
  const { removeParam, getParam } = useSearchParamsHook();

  // State to manage loading and auth type
  const [loading, setLoading] = useState<boolean>(false);
  const [authType, setAuthType] = useState<AuthQueryT>(
    (getParam("auth") as AuthQueryT) ?? "sign-in"
  );

  // Effect to update auth type based on query parameter
  useEffect(() => {
    const newAuthType: AuthQueryT =
      (getParam("auth") as AuthQueryT) ?? "sign-in";
    setAuthType(newAuthType);
    setLoading(false);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getParam("auth")]);

  // Callback function to handle form submission
  const onFinish = useCallback(
    async (formValue: FormValueT) => {
      if (loading) return;
      try {
        setLoading(true);
        const data: FormValueT =
          authType === "sign-in"
            ? formValue
            : {
                name: formValue.name!,
                surname: formValue.surname!,
                email: formValue.email,
                password: formValue.password,
              };

        const response: ResponseT = (await axios({
          method: "POST",
          url: `/user/${authType}`,
          data,
        })) as ResponseT;

        const { token, user } = response.data.data;
        const tokenType = 'Bearer'

        if (authType === "sign-in") {
          dispatch(signIn({ token, user, tokenType }))
        } else if (authType === "sign-up") {
          dispatch(signUp({ token, user, tokenType }))
        }

        form.resetFields();
        removeParam("auth");
        dispatchNotification({
          type: "success",
          message: `${t("modal.auth.auth_success_message")}, ${user.name} ${
            user.surname
          }!`,
          description: t("modal.auth.auth_success_description"),
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (error) {
        const err = error as ErrorT;
        dispatchNotification({
          type: "error",
          message: t("modal.auth.auth_error_message"),
          description: err.response?.data?.extraMessage
            ? err?.response?.data?.extraMessage
            : t("modal.auth.auth_error_description"),
        });
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authType, form]
  );

  // Function to handle modal cancellation
  const onCancel = () => {
    removeParam("auth");
  };

  return {
    onCancel,
    initialValues: initialValues[authType],
    form,
    onFinish,
    loading,
    authType,
  };
};

export default useAuthModalFeatures;
