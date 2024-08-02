// types.ts

export interface AuthResponse {
  data: {
    data: {
      token: string;
      user: UserAuth;
    };
  }
}

export interface UserAuth {
  email: string;
  name: string;
  surname: string;
}

export interface ErrorResponse {
  response: {
    data: {
      extraMessage?: string;
    };
  };
}
