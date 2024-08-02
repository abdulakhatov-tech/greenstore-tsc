import { UserI } from "@type/index";

export interface AuthStateI {
  token: string | null;
  tokenType: string | null;
  user: UserI | null;
}

export interface SignInDataI {
  token: string;
  user: UserI;
  tokenType?: string;
}
