import Axios, { InternalAxiosRequestConfig } from "axios";
import { serverApiUrl } from "./serverConstants";
import { config } from "process";
import { DEVICE_TYPE } from "@/utils/enum";

const securedApi = Axios.create({
  baseURL: serverApiUrl.authentication,
});
const publicApi = Axios.create({
  baseURL: serverApiUrl.authentication,
});

const userSecuredApi = Axios.create({
  baseURL: serverApiUrl.user,
});
const userPublicApi = Axios.create({
  baseURL: serverApiUrl.user,
});

userSecuredApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.accessToken = token;
      config.headers.devicetype = DEVICE_TYPE.WEB;
    }
    return config;
  }
);

securedApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.accessToken = token;
    config.headers.devicetype = DEVICE_TYPE.WEB;
  }
  return config;
});

export { securedApi, publicApi, userSecuredApi, userPublicApi };
