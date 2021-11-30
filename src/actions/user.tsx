import {
  LOADING_FINISHED,
  LOADING_STARTED,
  REMOVE_ADRESS,
  SET_USER_DATA,
} from "./types";

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data: data,
});

export const removeAdress = () => ({
  type: REMOVE_ADRESS,
});

export const loadingStarted = () => ({
  type: LOADING_STARTED,
});
export const loadingFinished = () => ({
  type: LOADING_FINISHED,
});
