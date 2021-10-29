import { AxiosResponse } from "axios";
import { api } from ".";

export class MenuService {
  static async getMenuDetails(params: {
    category?: string;
    name?: string;
  }): Promise<AxiosResponse<any>> {
    // return api.get(menuName ? `/menu/?category=${menuName}` : "/menu");
    return api.get("/menu", {
      params,
    });
  }
}
