import React from "react";
import { REMOVE_ADRESS, SET_ADRESS } from "../../../../actions/types";

const InitialState = {
  adress: {},
};

export const Adress = (state = InitialState, action) => {
  switch (action.type) {
    case SET_ADRESS:
      return action.data;
    case REMOVE_ADRESS:
      return 2;
  }
  return state;
};
