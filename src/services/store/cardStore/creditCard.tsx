import React from "react";
import produce from "immer";
import { REMOVE_CARD_ITEM, SET_CARD_DATA } from "../../../actions/types";

const addCreditCard = (state, action) => {
  let updatedCardsItems = state;
  const itemIndex = state.creditCards.findIndex(
    (item) => item.cardNumber === action.data.cardNumber
  );
  if (itemIndex >= 0) {
    updatedCardsItems = produce(state, (draft) => {
      draft.creditCards.splice(itemIndex, 1, action.data);
    });
  } else {
    const newCardItems = [...state.creditCards, action.data];
    updatedCardsItems = {
      ...updatedCardsItems,
      creditCards: newCardItems,
    };
  }
  return {
    ...updatedCardsItems,
  };
};

const removeItem = (state, action) => {
  const index = state.creditCards.findIndex(
    ({ cardNumber }) => cardNumber === action.cardNumber
  );
  let updatedCartItems = produce(state, (draft) => {
    draft.creditCards.splice(index, 1);
  });
  return {
    ...updatedCartItems,
  };
};

const InitialState = { creditCards: [] };

export const CardStore = (state = InitialState, action) => {
  switch (action.type) {
    case SET_CARD_DATA:
      console.log("STATECREDITCARD", state);
      console.log("ACTIONDATACREDITCARD", action.data);
      return addCreditCard(state, action);
    case REMOVE_CARD_ITEM:
      return removeItem(state, action);
    // case LOADING_STARTED:
    //   return { ...state, isLoading: true };
    // case LOADING_FINISHED:
    //   return { ...state, isLoading: false };
  }

  return state;
};
