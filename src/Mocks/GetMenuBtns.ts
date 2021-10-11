import menuItemsData from './Data/MenuItemsData';
const getMenuButtons = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(menuItemsData);
    }, 2000);
  });
};
export default getMenuButtons;
