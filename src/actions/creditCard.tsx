import {
  LOADING_FINISHED,
  LOADING_STARTED,
  REMOVE_CARD_ITEM,
  SET_CARD_DATA,
} from "./types";

export const setCreditCardData = (data) => ({
  type: SET_CARD_DATA,
  data: data,
});

export const removeCardItem = (cardNumber) => ({
  type: REMOVE_CARD_ITEM,
  id: cardNumber,
});

export const loadingStarted = () => ({
  type: LOADING_STARTED,
});
export const loadingFinished = () => ({
  type: LOADING_FINISHED,
});
