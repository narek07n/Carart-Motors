import axios from "axios";
import { IUserData, IUserResponse } from "@/utils/types/users";
import "dotenv/config";

export class UserServices {
  private baseUrl;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  }

  public async getUser() {
    try {
      const session = localStorage.getItem("session_id") ?? "";

      const { data } = await axios.get<IUserResponse>(
        `${this.baseUrl}/users/${session}`
      );
      if (!data) return null;

      return data;
    } catch (err) {
      return null;
    }
  }

  public async removeUser(user_id: string) {
    try {
      const { data } = await axios.delete<IUserResponse>(
        `${this.baseUrl}/users/${user_id}`
      );
      if (!data) return null;

      return data;
    } catch (err) {
      return null;
    }
  }

  public async loginClient(
    nickname: string,
    password: string
  ): Promise<IUserResponse | { message: string }> {
    const { data } = await axios.post(`${this.baseUrl}/users/client/login`, {
      nickname,
      password,
    });
    return data;
  }

  public async signinClient(
    user: IUserData
  ): Promise<IUserResponse | { message: string }> {
    try {
      const { data } = await axios.post(
        `${this.baseUrl}/users/client/signup`,
        user
      );
      return data;
    } catch (error: any) {
      return {
        message: error.message,
      };
    }
  }

  public async loginAdmin(
    nickname: string,
    password: string
  ): Promise<IUserResponse | { message: string }> {
    const { data } = await axios.post(`${this.baseUrl}/users/admin/login`, {
      nickname,
      password,
    });
    return data;
  }

  public async signinAdmin(
    user: IUserData
  ): Promise<IUserResponse | { message: string }> {
    const { data } = await axios.post(
      `${this.baseUrl}/users/admin/signup`,
      user
    );
    return data;
  }
}
