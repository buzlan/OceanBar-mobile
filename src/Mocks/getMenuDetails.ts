import {foodData} from './data/foodData';

export const getMenuDetails = menuName => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(foodData[menuName]);
    }, 2000);
  });
};
