import {
  ADD_QUANTITY,
  ADD_TO_CART,
  MINUS_QUANTITY,
  REMOVE_ALL_FROM_CART,
} from "./types";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  data: item,
});

export const removeFromCart = () => ({
  type: REMOVE_ALL_FROM_CART,
});

export const addQuantity = (idItem) => ({
  type: ADD_QUANTITY,
  id: idItem,
});

export const minusQuantity = (idItem) => ({
  type: MINUS_QUANTITY,
  id: idItem,
});
