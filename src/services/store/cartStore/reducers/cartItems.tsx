export const cartItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("STATESTATESTATESTATESTATESTATE", state);
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    // case "ADD_QUANTITY":
    //   const copiedState = [...state];
    //   const index = findIndex();
    //   const oldQuantity = state[index].quantity;
    //   const newItem = { ...state[index], quantity: oldQuantity + 1 };
    //   copiedState.splice(index, 1, newItem);
    //   return copiedState;
  }
  return state;
};
