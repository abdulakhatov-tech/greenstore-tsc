import useSearchParamsHook from "@hooks/useSearchParams";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { AxiosProp } from "./types";
import { useAuth } from "@config/auth";
import Cookies from "js-cookie";

const useAxios = () => {
  // const navigate = useNavigate();
  const { getToken } = useAuth();
  const { setParam } = useSearchParamsHook();

  const userCookie = Cookies.get("user");

  const access_token = userCookie
    ? JSON.parse(userCookie)?._id
    : "64bebc1e2c6d3f056a8c85b7";

  const request = async ({
    method = "GET",
    url,
    data = {},
    params = {},
    headers = {},
    includeToken = true,
    ...others
  }: AxiosProp) => {
    try {
      // base URL as an environment variable
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

      // headers
      const token = getToken();
      const authHeader =
        includeToken && token ? { Authorization: `Bearer ${token}` } : {};

      // axios request
      const response = await axios({
        method,
        url: `${API_BASE_URL}${url}`,
        data,
        params: {
          access_token: access_token,
          ...params,
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "true",
          ...authHeader,
          ...headers,
        },
        ...others,
      });

      return response;
    } catch (error: any) {
      if (error.response.status === 401) {
        setParam("auth", "sign-in");
      } else {
        // navigate("/error");
      }
      return Promise.reject(error);
    }
  };

  return request;
};

export default useAxios;
