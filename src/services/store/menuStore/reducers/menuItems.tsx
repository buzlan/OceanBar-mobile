export const menuItems = (
  state = {
    allMenuItems: [],
    searchValue: "",
  },
  action
) => {
  switch (action.type) {
    case "SAVE_MENU_ITEMS":
      return {
        ...state,
        allMenuItems: [...state.allMenuItems, ...action.payload],
      };
    case "SEARCH_MENU_ITEMS":
      const searchValue = action.payload;

      return {
        ...state,
        searchValue,
      };
  }

  return state;
};
