import { AxiosResponse } from "axios";
import { api } from ".";

export class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<any>> {
    return api.post("/users/auth", { email, password });
  }
  static async register(
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    password: string
  ): Promise<AxiosResponse<any>> {
    return api.post("/users/register", {
      name: firstname,
      secondname: lastname,
      email,
      phone: phoneNumber,
      password,
    });
  }
}
