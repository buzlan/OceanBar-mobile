import { AxiosResponse } from "axios";
import { api } from "../http";

export class MenuService {
  static async getMenuDetails(menuName?: string): Promise<AxiosResponse<any>> {
    return api.get(menuName ? `/menu/?category=${menuName}` : "/menu");
  }
}
