import React from "react";
import {
  LOADING_FINISHED,
  LOADING_STARTED,
  SET_ORDERS,
} from "../../../actions/types";

const InitialState = { isLoading: false };

export const Orders = (state = InitialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      console.log("ORDERSACTIONDATA", action.data);
      return { ...state, ...action.data };
    case LOADING_STARTED:
      return { ...state, isLoading: true };
    case LOADING_FINISHED:
      return { ...state, isLoading: false };
  }

  return state;
};
