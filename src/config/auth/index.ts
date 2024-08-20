import { useCallback, useEffect, useState } from "react";
import useSearchParamsHook from "@hooks/useSearchParams";
import cookie from "js-cookie";
import { AuthStateI, SignInDataI } from "./types";

const initialAuthState: AuthStateI = {
  token: null,
  tokenType: null,
  user: null,
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthStateI>(initialAuthState);
  const { removeParam } = useSearchParamsHook();

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

  useEffect(() => {
    syncAuthStateWithCookies();
  }, [syncAuthStateWithCookies]);

  const signIn = ({ token, user, tokenType = "Bearer" }: SignInDataI) => {
    cookie.set("token", token, { expires: 7 });
    cookie.set("tokenType", tokenType, { expires: 7 });
    cookie.set("user", JSON.stringify(user));

    setAuthState({ token, tokenType, user });
  };

  const signUp = ({ token, user, tokenType = "Bearer" }: SignInDataI) => {
    signIn({ token, user, tokenType });
  };

  const updateUser = ({ setter }: any) => {
    cookie.set("user", JSON.stringify(setter));

    // Update the state with the new user data
    setAuthState((prevState) => ({
      ...prevState,
      user: setter,
    }));
  };

  const signOut = () => {
    cookie.remove("token");
    cookie.remove("tokenType");
    cookie.remove("user");

    setAuthState(initialAuthState);
    window.location.reload();
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
