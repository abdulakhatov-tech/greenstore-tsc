
export type AxiosProp = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: any;
  params?: object;
  headers?: object;
  includeToken?: boolean;
} ; 

