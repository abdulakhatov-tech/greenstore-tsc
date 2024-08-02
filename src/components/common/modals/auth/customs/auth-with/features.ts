import { useAuth } from "@config/auth";
import useAxios from "@hooks/useAxios";
import { useAppDispatch } from "@hooks/useRedux";
import { setNotification } from "@redux/slices/notification";
import { signInWithGoogle } from "@config/firebase";
import useSearchParamsHook from "@hooks/useSearchParams";
import { AuthQuery } from "../../types";
import useAuthModalFeatures from "../../features";
import { AuthResponse, ErrorResponse } from "./types";

const useAuthWithFeatures = () => {
  const axios = useAxios();
  const { signIn, signUp } = useAuth();
  const dispatch = useAppDispatch();
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
      const response = await axios<AuthResponse>({
        method: "POST",
        url: `/user/${endpoint}/google`,
        data: {
          email: user?.email,
        },
      });

      const { token, user: userAuth } = response.data.data;
      const authAction = authType === "sign-in" ? signIn : signUp;
      authAction({ token, user: userAuth });

      removeParam("auth");
      dispatch(
        setNotification({
          type: "success",
          message: `Welcome, ${userAuth?.name} ${userAuth?.surname}!`,
          description: `You have successfully ${
            authType === AuthQuery.SignUp ? AuthQuery.SignUp : AuthQuery.SignUp
          } with Google!`,
        })
      );

      setTimeout(() => window.location.reload(), 700);
    } catch (error) {

        const errorMessage = (error as ErrorResponse)?.response?.data?.extraMessage ||
        (error as Error)?.message ||
          "An error occurred"

      dispatch(
        setNotification({
          type: "error",
          message:errorMessage          ,
          description: `Failed to ${
            authType === AuthQuery.SignUp ? AuthQuery.SignUp : AuthQuery.SignIn
          } with Google`,
        })
      );
    }
  };

  const authWithFacebook = () => {
    return dispatch(
      setNotification({
        type: "error",
        message: "Facebook authentication is not supported",
        description:
          "We are currently unable to authenticate with Facebook. Please try again later.",
      })
    );
  };

  const authWithQRCode = () => {
    return dispatch(
      setNotification({
        type: "error",
        message: "QR code authentication is not supported",
        description:
          "We are currently unable to authenticate with QR codes. Please try again later.",
      })
    );
  };

  return { authWithGoogle, authWithFacebook, authWithQRCode };
};

export default useAuthWithFeatures;
