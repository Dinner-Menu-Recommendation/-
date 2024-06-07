import axios, { AxiosError, AxiosInstance } from "axios";

const apiInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiInstance.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params["apiKey"] = import.meta.env.VITE_API_KEY;
    return config;
  },
  (error: AxiosError) => {
    console.error(error);

    return Promise.reject(error);
  }
);

export default apiInstance;
