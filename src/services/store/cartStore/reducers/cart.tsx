import uuid from "uuid";
import produce from "immer";

import {
  ADD_ALL_ITEMS_TO_CART,
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_INGREDIENTS,
  UPDATE_ITEMS_FROM_CART,
  UPDATE_QUANTITY,
} from "../../../../actions/types";

const checkIngEquality = (a, b) => {
  const aString = [...a].sort().join("");
  const bString = [...b].sort().join("");
  return aString === bString;
};

const removeItem = (state, action) => {
  console.log("STATEREMOVE", state);
  console.log("ACTIONREMOVE", action);

  const index = state.cartItems.findIndex(({ id }) => id === action.id);
  let updatedCartItems = produce(state, (draft) => {
    draft.cartItems.splice(index, 1);
  });
  return {
    ...updatedCartItems,
    totalSum: totalSum(updatedCartItems.cartItems),
  };
};

const changeQuantity = (state, action) => {
  console.log("STATE", state);
  console.log("ACTION", action);

  let copiedState = { ...state };
  const index = copiedState.cartItems.findIndex(
    ({ id }) => id === action.data.id
  );
  let updatedCartItems = produce(copiedState, (draft) => {
    const newQuantity = action.data.quantity;
    draft.cartItems[index].quantity = newQuantity;
  });
  return {
    ...updatedCartItems,
    totalSum: totalSum(updatedCartItems.cartItems),
  };
};

const updateIng = (state, action) => {
  let copiedState = { ...state };
  const index = copiedState.cartItems.findIndex(
    ({ id }) => id === action.data.id
  );
  let updatedCartItems = produce(copiedState, (draft) => {
    draft.cartItems[index].ingredients = action.data.ingredients;
    draft.cartItems[index].excludedIng = action.data.excludedIng;
  });
  return updatedCartItems;
};

const totalSum = (cartItems) => {
  return cartItems
    .map((el) => el.dish.price * el.quantity)
    .reduce((el1, el2) => {
      return el1 + el2;
    }, 0);
};

const InitialState = {
  cartItems: [],
  totalSum: 0,
};

const addToCart = (state, action) => {
  console.log("ACTIONA", action);

  let updatedCartItems = state;
  const itemIndex = state.cartItems.findIndex(
    (item) => item.id === action.data.id
  );
  if (itemIndex >= 0) {
    updatedCartItems = produce(state, (draft) => {
      draft.cartItems.splice(itemIndex, 1, action.data);
    });
  } else {
    const newCartItems = [...state.cartItems, action.data];
    updatedCartItems = {
      ...updatedCartItems,
      cartItems: newCartItems,
    };
  }
  return {
    ...updatedCartItems,
    totalSum: totalSum(updatedCartItems.cartItems),
  };
};

export const Cart = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_ALL_ITEMS_TO_CART:
      console.log(action, "ADD_ALL_ITEMS_TO_CART");
      return { cartItems: action.data, totalSum: totalSum(action.data) };
    case ADD_TO_CART:
      return addToCart(state, action);
    case REMOVE_ITEM_FROM_CART:
      return removeItem(state, action);
    case REMOVE_ALL_FROM_CART:
      return InitialState;
    case UPDATE_INGREDIENTS:
      const index = state.cartItems.findIndex(
        ({ id }) => id === action.data.id
      );
      return produce(state, (draft) => {
        draft.cartItems[index].ingredients = action.data.ingredients;
      });
    case UPDATE_QUANTITY:
      return changeQuantity(state, action);
    case UPDATE_ITEMS_FROM_CART:
      const dishIndex = state.cartItems.findIndex(
        (item) =>
          item.name === action.data.name &&
          checkIngEquality(item.excludedIng, action.data.excludedIng)
      );
      if (dishIndex >= 0) {
        return removeItem(
          addToCart(state, action, action.data.quantity),
          action
        );
      } else {
        return updateIng(state, action);
      }
  }
  return state;
};
