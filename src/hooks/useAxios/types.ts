
export type RequestConfigT = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: Record<string, unknown>;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
  includeToken?: boolean;
} ; // Extend with AxiosRequestConfig for additional options
