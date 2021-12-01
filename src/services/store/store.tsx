import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FlashMessageService } from "../flashMassage";
import { CartService } from "../http/CartService";
import { OrderService } from "../http/OrderService";
import { Adress } from "./adressStore/reducers/adress";

import { Cart } from "./cartStore/reducers/cart";
import { menuItems } from "./menuStore/reducers/menuItems";
import { Orders } from "./orderStore/orders";
import { UserData } from "./userStore/userId";

const rootReducer = combineReducers({
  Cart,
  menuItems,
  Adress,
  UserData,
  Orders,
});

const services = {
  cartService: CartService,
  orderService: OrderService,
  flashMessageService: new FlashMessageService(),
};

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(services))
);
