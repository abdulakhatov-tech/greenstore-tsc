
export type AxiosProp = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: object;
  params?: object;
  headers?: object;
  includeToken?: boolean;
} ; 

