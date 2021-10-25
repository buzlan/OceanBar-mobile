import axios from "axios";

export const getMenuDetails = async (menuName: string) => {
  try {
    const response = await axios.get(
      `http://172.17.110.33:3001/api/menu/?category=${menuName}`
    );
    return response.data.data.dishes;
  } catch (err) {
    console.log(err);
  }
};
