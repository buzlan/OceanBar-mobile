import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { cartItems } from "./cartStore/reducers/cartItems";
import { menuItems } from "./menuStore/reducers/menuItems";

const rootReducer = combineReducers({
  cartItems,
  menuItems,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
