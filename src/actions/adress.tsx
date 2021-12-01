import { GET_ADRESS, REMOVE_ADRESS, SET_ADRESS } from "./types";

export const setAdress = (item) => ({
  type: SET_ADRESS,
  data: item,
});
export const getAdress = () => ({
  type: GET_ADRESS,
});
