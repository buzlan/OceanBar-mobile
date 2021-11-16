import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

export const BASE_URL = "http://13.49.50.72/api";

export const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    console.log("token", token);

    //@ts-ignore
    config.headers.Authorization = `Bearer ${token}`;

    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
