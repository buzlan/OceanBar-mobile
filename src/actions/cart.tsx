import {
  ADD_ALL_ITEMS_TO_CART,
  ADD_ITEM_TO_CART,
  ADD_QUANTITY,
  ADD_TO_CART,
  MINUS_QUANTITY,
  REMOVE_ALL_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_INGREDIENTS,
  UPDATE_ITEMS_FROM_CART,
  UPDATE_QUANTITY,
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
export const updateItemsFromCart = (dish) => ({
  type: UPDATE_ITEMS_FROM_CART,
  data: dish,
});

export const addAllItemsToCart = (items) => ({
  type: ADD_ALL_ITEMS_TO_CART,
  data: items,
});

export const addOneItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  data: item,
});

export const removeItemFromCart = (idItem) => ({
  type: REMOVE_ITEM_FROM_CART,
  id: idItem,
});
export const updateQuantity = (item) => ({
  type: UPDATE_QUANTITY,
  data: item,
});
export const updateIngredients = (item) => ({
  type: UPDATE_INGREDIENTS,
  data: item,
});
