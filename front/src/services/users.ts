import axios from "axios";
import { IUserData, IUserResponse } from "@/utils/types/users";
import "dotenv/config";

export class UserServices {
  private baseUrl;
  constructor() {
    this.baseUrl = process.env.BASE_URL;
  }

  public async loginClient(
    nickname: string,
    password: string
  ): Promise<IUserResponse | { message: string }> {
    const { data } = await axios.post(`${this.baseUrl}/client/login`, {
      nickname,
      password,
    });
    return data;
  }

  public async signinClient(
    user: IUserData
  ): Promise<IUserResponse | { message: string }> {
    const { data } = await axios.post(`${this.baseUrl}/client/signup`, user);
    return data;
  }

  public async loginAdmin(
    nickname: string,
    password: string
  ): Promise<IUserResponse | { message: string }> {
    const { data } = await axios.post(`${this.baseUrl}/admin/login`, {
      nickname,
      password,
    });
    return data;
  }

  public async signinAdmin(
    user: IUserData
  ): Promise<IUserResponse | { message: string }> {
    const { data } = await axios.post(`${this.baseUrl}/admin/signup`, user);
    return data;
  }
}
