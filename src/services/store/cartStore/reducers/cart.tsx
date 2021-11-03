import uuid from "uuid";
import produce from "immer";

import {
  ADD_QUANTITY,
  ADD_TO_CART,
  MINUS_QUANTITY,
  REMOVE_ALL_FROM_CART,
} from "../../../../actions/types";

const changeQuantity = (state, action, modifier) => {
  let copiedState = state;
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

export const Cart = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCartItems = state;
      if (state.cartItems.some((item) => item.name === action.data.name)) {
        updatedCartItems = produce(state, (draft) => {
          const index = draft.cartItems.findIndex(
            (item) => item.name === action.data.name
          );
          draft.cartItems[index].quantity += 1;
        });
      } else {
        const newCartItems = [
          ...state.cartItems,
          { ...action.data, quantity: 1, id: uuid.v4() },
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

    case REMOVE_ALL_FROM_CART:
      return InitialState;
    case ADD_QUANTITY:
      return changeQuantity(state, action, (oldQuantity) => oldQuantity + 1);
    case MINUS_QUANTITY:
      return changeQuantity(state, action, (oldQuantity) => oldQuantity - 1);
  }
  return state;
};
