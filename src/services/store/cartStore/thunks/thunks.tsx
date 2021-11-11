import {
  addAllItemsToCart,
  addToCart,
  removeFromCart,
  removeItemFromCart,
  updateIngredients,
  updateQuantity,
} from "../../../../actions/cart";

export const getAllCartItems = () => {
  return async (dispatch, getState, { cartService }) => {
    // do request to API

    const response = await cartService.getCartItems();
    dispatch(addAllItemsToCart(response.data.cart));
  };
};

export const addItemToCart = ({ ingredients, quantity, id }) => {
  return async (dispatch, getState, { cartService, flashMessageService }) => {
    try {
      const response = await cartService.addOneItemToCart(
        ingredients,
        quantity,
        id
      );

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
    const response = await cartService.clearCart();

    dispatch(removeFromCart());
  };
};

export const deleteItem = (id) => {
  return async (dispatch, getState, { cartService }) => {
    try {
      const response = await cartService.deleteItem(id);

      dispatch(removeItemFromCart(id));
    } catch (err) {}
  };
};

export const updateQuantityItem = ({ id, quantity }) => {
  return async (dispatch, getState, { cartService }) => {
    try {
      const response = await cartService.updateItem(id, { quantity });

      dispatch(updateQuantity(response.data.updatedPosition));
    } catch (err) {}
  };
};

export const updateIngredientsItem = ({ id, ingredients }) => {
  return async (dispatch, getState, { cartService }) => {
    try {
      const response = await cartService.updateItem(id, { ingredients });

      dispatch(updateIngredients(response.data.updatedPosition));
    } catch (err) {}
  };
};
