import { AxiosResponse } from "axios";
import { api } from ".";

export class CartService {
  static async getCartItems(): Promise<AxiosResponse<any>> {
    return api.get("/cart");
  }
  static async addOneItemToCart(ingredients, quantity, id) {
    return api.post("/cart", { ingredients, quantity, id });
  }
  static async deleteItem(id) {
    return api.delete(`/cart/${id}`);
  }
  static async clearCart() {
    return api.delete("/cart");
  }
  static async updateItem(id, params) {
    return api.patch(`/cart/${id}`, params);
  }
}
