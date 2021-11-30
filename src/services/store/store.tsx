import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FlashMessageService } from "../flashMassage";
import { CartService } from "../http/CartService";
import { Adress } from "./adressStore/reducers/adress";

import { Cart } from "./cartStore/reducers/cart";
import { menuItems } from "./menuStore/reducers/menuItems";

const rootReducer = combineReducers({
  Cart,
  menuItems,
  Adress,
});

const services = {
  cartService: CartService,
  flashMessageService: new FlashMessageService(),
};

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(services))
);
