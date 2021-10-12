import {menuItemsData} from './data/menuItemsData';

export const getMenuButtons = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(menuItemsData);
    }, 2000);
  });
};
