import React from "react";
import {
  LOADING_FINISHED,
  LOADING_STARTED,
  REMOVE_ADRESS,
  SET_USER_DATA,
} from "../../../actions/types";

const InitialState = { isLoading: false };

export const UserData = (state = InitialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      console.log("ACTIONDATA", action.data);
      return { ...state, ...action.data };
    case REMOVE_ADRESS: {
      return { ...state, street: "", flat: "", homeNumber: "", homePart: "" };
    }
    case LOADING_STARTED:
      return { ...state, isLoading: true };
    case LOADING_FINISHED:
      return { ...state, isLoading: false };
  }

  return state;
};
