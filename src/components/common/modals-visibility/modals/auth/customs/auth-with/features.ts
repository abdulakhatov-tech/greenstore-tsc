import useAxios from "@hooks/useAxios";
import useSearchParamsHook from "@hooks/useSearchParams";
import { ResponseT } from "../../types";
import useAuthModalFeatures from "../../features";
import { ErrorResponse } from "./types";
import { useAuth } from "@config/auth";
import { signInWithGoogle } from "@config/firebase";
import { AuthQuery } from "@type/index";
import { useNotification } from "@tools/notification/notification";
import { useTranslation } from "react-i18next";

const useAuthWithFeatures = () => {
  const { t } = useTranslation();
  const axios = useAxios();
  const { signIn, signUp } = useAuth();
  const dispatchNotification = useNotification();
  const { authType } = useAuthModalFeatures();
  const { removeParam } = useSearchParamsHook();

  const authWithGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();
      if (!user) {
        throw new Error("Failed to sign in with Google");
      }

      const endpoint =
        authType === AuthQuery.SignUp ? AuthQuery.SignUp : AuthQuery.SignIn;

      const response: ResponseT = (await axios({
        method: "POST",
        url: `/user/${endpoint}/google`,
        data: {
          email: user?.email,
        },
      })) as ResponseT;

      const { token, user: userAuth } = response.data.data;
      const authAction = authType === AuthQuery.SignIn ? signIn : signUp;
      authAction({ token, user: userAuth });

      removeParam("auth");
      dispatchNotification({
        type: "success",
        message: `${t("modal.auth.auth_success_message")}!`,
        description: t("modal.auth.auth_success_description"),
      });

      setTimeout(() => window.location.reload(), 700);
    } catch (error) {
      const errorMessage =
        (error as ErrorResponse)?.response?.data?.extraMessage ||
        (error as Error)?.message ||
        "An error occurred";

      dispatchNotification({
        type: "error",
        message: t("modal.auth.auth_error_message"),
        description: errorMessage
          ? errorMessage
          : t("modal.auth.auth_error_description"),
      });
    }
  };

  const authWithFacebook = () => {
    return dispatchNotification({
      type: "error",
      message: "Facebook authentication is not supported",
      description:
        "We are currently unable to authenticate with Facebook. Please try again later.",
    });
  };

  const authWithQRCode = () => {
    return dispatchNotification({
      type: "error",
      message: "QR code authentication is not supported",
      description:
        "We are currently unable to authenticate with QR codes. Please try again later.",
    });
  };

  return { authWithGoogle, authWithFacebook, authWithQRCode };
};

export default useAuthWithFeatures;
