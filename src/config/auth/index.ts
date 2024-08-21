import cookie from "js-cookie";
import { useCallback, useEffect, useState } from "react";

import useSearchParamsHook from "@hooks/useSearchParams";
import { AuthStateI, SignInDataI } from "./types";
import { useNotification } from "@tools/notification/notification";

// initial authentication state
const initialAuthState: AuthStateI = {
  token: null,
  tokenType: null,
  user: null,
};

// Custom hook for authentication
export const useAuth = () => {
  const dispatchNotification = useNotification();
  const { removeParam } = useSearchParamsHook();
  const [authState, setAuthState] = useState<AuthStateI>(initialAuthState);

  // Function to sync state with cookies
  const syncAuthStateWithCookies = useCallback(() => {
    const token = cookie.get("token");
    const tokenType = cookie.get("tokenType") as string;
    const user = cookie.get("user") ? JSON.parse(cookie.get("user")!) : null;

    if (token && user) {
      setAuthState({ token, tokenType, user });
      removeParam("auth");
    } else {
      setAuthState(initialAuthState);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Syncing authentication state with cookies on component mount or update
  useEffect(() => {
    syncAuthStateWithCookies();
  }, [syncAuthStateWithCookies]);

  const signIn = ({ token, user, tokenType = "Bearer" }: SignInDataI) => {
    try {
      cookie.set("token", token, { expires: 7 });
      cookie.set("tokenType", tokenType, { expires: 7 });
      cookie.set("user", JSON.stringify(user));

      setAuthState({ token, tokenType, user });
    } catch (error) {
      dispatchNotification({
        type: "error",
        message: "Authentication",
        description: "Failed to authenticate",
      });
    }
  };

  const signUp = ({ token, user, tokenType = "Bearer" }: SignInDataI) => {
    signIn({ token, user, tokenType });
  };

  const updateUser = ({ setter }: any) => {
    try {
      cookie.set("user", JSON.stringify(setter));

      // Update the state with the new user data
      setAuthState((prevState) => ({
        ...prevState,
        user: setter,
      }));
    } catch (error) {
      dispatchNotification({
        type: "error",
        message: "Update User",
        description: "Failed to update user",
      });
    }
  };

  const signOut = () => {
    try {
      cookie.remove("token");
      cookie.remove("tokenType");
      cookie.remove("user");

      setAuthState(initialAuthState);
      window.location.reload();
    } catch (error) {
      dispatchNotification({
        type: "error",
        message: "Sign Out",
        description: "Failed to sign out",
      });
    }
  };

  const getUser = (): AuthStateI => {
    return authState;
  };

  const isAuthed = (): boolean => {
    return !!authState?.token;
  };

  const getToken = (): string => {
    return authState?.token || "";
  };

  return { signIn, signOut, getUser, isAuthed, signUp, getToken, updateUser };
};
