import {
  addAllItemsToCart,
  addToCart,
  loadingFinished,
  loadingStarted,
  removeFromCart,
  removeItemFromCart,
  updateIngredients,
  updateQuantity,
} from "../../../../actions/cart";
import {
  loadingFinish,
  loadingStart,
  setOrdersData,
} from "../../../../actions/order";

export const getAllCartItems = () => {
  return async (dispatch, getState, { cartService }) => {
    // do request to API
    dispatch(loadingStarted());
    const response = await cartService.getCartItems();

    dispatch(loadingFinished());

    dispatch(addAllItemsToCart(response.data.cart));
  };
};
export const getAllOrders = () => {
  return async (dispatch, getState, { orderService }) => {
    // do request to API
    dispatch(loadingStart());
    const response = await orderService.getOrders();

    dispatch(loadingFinish());

    dispatch(setOrdersData(response.data));
  };
};

export const addItemToCart = ({ ingredients, quantity, id }) => {
  return async (dispatch, getState, { cartService, flashMessageService }) => {
    try {
      dispatch(loadingStarted());
      const response = await cartService.addOneItemToCart(
        ingredients,
        quantity,
        id
      );
      dispatch(loadingFinished());

      if (response.data.error) {
        flashMessageService.showErrorMessage(`Блюдо уже есть в корзине`);
      } else {
        const dish = response.data.cartPosition.dish;
        flashMessageService.showSuccessMessage(
          `${dish.name} добавлено в корзину`
        );
        dispatch(addToCart(response.data.cartPosition));
      }
    } catch (err) {
      flashMessageService.showErrorMessage(`Что-то пошло не так`);
    }
  };
};

export const clearBasket = () => {
  return async (dispatch, getState, { cartService }) => {
    // do request to API
    dispatch(loadingStarted());
    const response = await cartService.clearCart();
    dispatch(loadingFinished());

    dispatch(removeFromCart());
  };
};

export const deleteItem = (id) => {
  return async (dispatch, getState, { cartService }) => {
    try {
      dispatch(loadingStarted());
      const response = await cartService.deleteItem(id);
      dispatch(loadingFinished());
      dispatch(removeItemFromCart(id));
    } catch (err) {}
  };
};

export const updateQuantityItem = ({ id, quantity }) => {
  return async (dispatch, getState, { cartService }) => {
    try {
      dispatch(loadingStarted());
      const response = await cartService.updateItem(id, { quantity });
      dispatch(loadingFinished());
      dispatch(updateQuantity(response.data.updatedPosition));
    } catch (err) {}
  };
};

export const updateIngredientsItem = ({ id, ingredients }) => {
  return async (dispatch, getState, { cartService }) => {
    try {
      dispatch(loadingStarted());
      const response = await cartService.updateItem(id, { ingredients });
      dispatch(loadingFinished());
      dispatch(updateIngredients(response.data.updatedPosition));
    } catch (err) {}
  };
};
