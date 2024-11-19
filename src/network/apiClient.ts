import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

const apiClient = axios.create({
  baseURL: API_HOST,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.url) {
      // Check if the URL already has query parameters
      const separator = config.url.includes("?") ? "&" : "?";
      // Append the API key to the URL
      config.url += `${separator}api_key=${API_KEY}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default apiClient;
