import { AxiosResponse } from "axios";
import { api } from ".";

type orderState = "В процессе" | "Выполнен";
type orderType = "Бронирование стола" | "Доставка" | "Навынос";
export class OrderService {
  static async createOrder(
    state: orderState,
    type: orderType,
    date: string,
    time: string,
    price: number,
    paymentType: string,
    tableSize: string,
    address: string
  ): Promise<AxiosResponse<any>> {
    return api.post("/order", {
      state,
      type,
      date,
      time,
      price,
      paymentType,
      tableSize,
      address,
    });
  }
  static async getOrders(): Promise<AxiosResponse<any>> {
    return api.get("/order");
  }
  static async getDishesForOrder(id: number): Promise<AxiosResponse<any>> {
    return api.get(`/order/dishes/${id}`);
  }
  static async deleteOrderById(id: number): Promise<AxiosResponse<any>> {
    return api.delete(`/order/${id}`);
  }
}
