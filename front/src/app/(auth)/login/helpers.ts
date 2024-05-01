import { object, string } from "yup";
import { IUserData } from "@/utils/types/users";
import { UserServices } from "@/services/users";

export const loginUser = async (data: Pick<IUserData, 'nickname' | "password">) => {
  const userServices = new UserServices();
  let userSchema = object({
    password: string().min(6),
    nickname: string().required(),
  });
  const user = await userSchema.validate(data);
  if (user.nickname && user.password) {
    const res = await userServices.loginClient(user.nickname, user.password);
    if ("message" in res) return res;
    localStorage.setItem("session_id", res.session_id);
    return res;
  }
  return {
    message: "Wrong username or password",
  };
};
