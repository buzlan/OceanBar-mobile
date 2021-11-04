import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Cart } from "./cartStore/reducers/cart";
import { menuItems } from "./menuStore/reducers/menuItems";

const rootReducer = combineReducers({
  Cart,
  menuItems,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
