export type InitialStateT = {
  "sign-in": {
    email: string;
    password: string;
  };
  "sign-up": {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
};

export const enum AuthQuery {
  SignIn = "sign-in",
  SignUp = "sign-up",
}

export type AuthQueryT = AuthQuery.SignIn | AuthQuery.SignUp;


// Define the type for form values passed to the onFinish function
export interface FormValueT {
   email: string;
   password: string;
   name?: string;
   surname?: string;
   confirmPassword?: string;
   [key: string]: unknown; // Add index signature to make it compatible with Record<string, unknown>
 }
 
 // Define the request configuration type for useAxios
 export interface RequestConfigT {
   method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
   url: string;
   data?: Record<string, unknown>;
   params?: Record<string, unknown>;
   headers?: Record<string, string>;
   includeToken?: boolean;
 }

export interface UseAuthModalFeaturesT {
  onCancel: () => void;
  initialValues: InitialStateT[keyof InitialStateT];
  form: unknown | undefined; // Ant Design form instance
  onFinish: (formValue: FormValueT) => void;
  loading: boolean;
  authType: AuthQueryT;
}

export interface UserT {
  name: string;
  surname: string;
  email?: string;
  id?: string;
}

// Define the structure of the response object
export interface ResponseT {
  data: {
    data: {
      token: string;
      user: UserT;
    };
  };
}

// Define the structure of the error object
export interface ErrorT {
  response?: {
    data?: {
      extraMessage?: string;
    };
  };
}
