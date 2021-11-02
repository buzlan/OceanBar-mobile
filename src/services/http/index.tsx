import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

export const BASE_URL = "http://172.17.110.33:3001/api";

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
