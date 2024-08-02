import {
  AuthQueryT,
  InitialStateT,
  UseAuthModalFeaturesT,
  FormValueT,
  ResponseT,
  ErrorT,
  RequestConfigT,
} from "./types";
import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import useAxios from "@hooks/useAxios";
import { useAppDispatch } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";
import { setNotification } from "@redux/slices/notification";
import { useAuth } from "@config/auth";

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
  const axios = useAxios();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { signIn, signUp } = useAuth();
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

        const requestConfig: RequestConfigT = {
          method: "POST",
          url: `/user/${authType}`,
          data,
        };

        const response: ResponseT = await axios(requestConfig);

        const { token, user } = response.data.data;

        if (authType === "sign-in") {
          signIn({ token, user });
        } else if (authType === "sign-up") {
          signUp({ token, user });
        }

        form.resetFields();
        removeParam("auth");
        dispatch(
          setNotification({
            type: "success",
            message: `Welcome, ${user.name} ${user.surname}!`,
            description: `You have successfully ${
              authType === "sign-in" ? "logged in" : "registered"
            } successfully`,
            duration: 5, 
          })
        );
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } catch (error) {
        const err = error as ErrorT;
        dispatch(
          setNotification({
            type: "error",
            message: "Failed to authenticate",
            description: err.response?.data?.extraMessage
              ? err.response.data.extraMessage
              : "Please check your credentials and try again.",
          })
        );
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
