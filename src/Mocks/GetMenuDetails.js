import foodData from './Data/foodData';
const getMenuDetails = menuName => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(foodData[menuName]);
    }, 2000);
  });
};
export default getMenuDetails;
