import { useCallback, useEffect, useState } from "react";
import useSearchParamsHook from "@hooks/useSearchParams";
import Cookies from "js-cookie";
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
    const token = Cookies.get("token");
    const tokenType = Cookies.get("tokenType") as string;
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")!) : null;

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
    Cookies.set("token", token, { expires: 7 });
    Cookies.set("tokenType", tokenType, { expires: 7 });
    Cookies.set("user", JSON.stringify(user));

    setAuthState({ token, tokenType, user });
  };

  const signUp = ({ token, user, tokenType = "Bearer" }: SignInDataI) => {
    signIn({ token, user, tokenType });
  };

  const signOut = () => {
    Cookies.remove("token");
    Cookies.remove("tokenType");
    Cookies.remove("user");

    setAuthState(initialAuthState);
    window.location.reload();
  };

  const getUser = (): AuthStateI => {
    return authState;
  };

  const isAuthed = (): boolean => {
    return !!authState?.token;
  };

  return { signIn, signOut, getUser, isAuthed, signUp };
};
