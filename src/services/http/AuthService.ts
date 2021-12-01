import { AxiosResponse } from "axios";
import { api } from ".";

export class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<any>> {
    return api.post("/users/auth", { email, password });
  }
  static async logout(): Promise<AxiosResponse<any>> {
    return api.post("/logout");
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
  static async updateAdress(
    street: string,
    homeNumber: string,
    homePart: string,
    flat: string,
    id: string
  ): Promise<AxiosResponse<any>> {
    return api.patch(`/users/${id}`, { street, homeNumber, homePart, flat });
  }
  static async updateProfileData(
    name: string,
    secondname: string,
    phone: string,
    email: string,
    id: string
  ): Promise<AxiosResponse<any>> {
    return api.patch(`/users/${id}`, { name, secondname, phone, email });
  }
  static async checkPassword(
    email: string,
    password: string
  ): Promise<AxiosResponse<any>> {
    return api.post("/users/auth", { email, password });
  }
  static async updatePassword(
    id: string,
    password: string
  ): Promise<AxiosResponse<any>> {
    return api.patch(`/users/${id}`, { password });
  }
}
