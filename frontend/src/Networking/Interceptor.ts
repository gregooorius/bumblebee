import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  async (config) => {
    config.headers.setContentType("application/json");
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
