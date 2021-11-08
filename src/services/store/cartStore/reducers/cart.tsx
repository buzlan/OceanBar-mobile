import uuid from "uuid";
import produce from "immer";

import {
  ADD_QUANTITY,
  ADD_TO_CART,
  MINUS_QUANTITY,
  REMOVE_ALL_FROM_CART,
  UPDATE_ITEMS_FROM_CART,
} from "../../../../actions/types";

const checkIngEquality = (a, b) => {
  const aString = [...a].sort().join("");
  const bString = [...b].sort().join("");
  return aString === bString;
};

const removeItem = (state, action) => {
  let copiedState = { ...state };
  const index = copiedState.cartItems.findIndex(
    ({ id }) => id === action.data.id
  );
  let updatedCartItems = produce(copiedState, (draft) => {
    draft.cartItems.splice(index, 1);
  });
  return {
    ...updatedCartItems,
    totalSum: totalSum(updatedCartItems.cartItems),
  };
};

const changeQuantity = (state, action, modifier) => {
  let copiedState = { ...state };
  const index = copiedState.cartItems.findIndex(({ id }) => id === action.id);
  let updatedCartItems = produce(copiedState, (draft) => {
    const newQuantity = modifier(draft.cartItems[index].quantity);
    draft.cartItems[index].quantity = newQuantity;
    if (newQuantity === 0) {
      draft.cartItems.splice(index, 1);
    }
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
    .map((el) => el.price * el.quantity)
    .reduce((el1, el2) => {
      return el1 + el2;
    }, 0);
};

const InitialState = {
  cartItems: [],
  totalSum: 0,
};

const addToCart = (state, action, quantity = 1) => {
  let updatedCartItems = state;
  const itemIndex = state.cartItems.findIndex(
    (item) =>
      item.name === action.data.name &&
      checkIngEquality(item.excludedIng, action.data.excludedIng)
  );
  if (itemIndex >= 0) {
    updatedCartItems = produce(state, (draft) => {
      draft.cartItems[itemIndex].quantity += quantity;
    });
  } else {
    const newCartItems = [
      ...state.cartItems,
      { ...action.data, quantity: quantity, id: uuid.v4() },
    ];
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
    case ADD_TO_CART:
      return addToCart(state, action);

    case REMOVE_ALL_FROM_CART:
      return InitialState;
    case ADD_QUANTITY:
      return changeQuantity(state, action, (oldQuantity) => oldQuantity + 1);
    case MINUS_QUANTITY:
      return changeQuantity(state, action, (oldQuantity) => oldQuantity - 1);
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
