import { LOADING_FINISHED, LOADING_STARTED, SET_ORDERS } from "./types";

export const setOrdersData = (data) => ({
  type: SET_ORDERS,
  data: data,
});

export const loadingStart = () => ({
  type: LOADING_STARTED,
});
export const loadingFinish = () => ({
  type: LOADING_FINISHED,
});
