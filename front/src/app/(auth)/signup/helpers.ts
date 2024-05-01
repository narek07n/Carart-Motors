import { object, string } from "yup";
import { IUserData } from "@/utils/types/users";
import { UserServices } from "@/services/users";

export const addUser = async (data: IUserData) => {
  const userServices = new UserServices();
  let userSchema = object({
    password: string().min(6),
    nickname: string().required(),
    email: string().email(),
  });
  const user = await userSchema.validate(data);
  if (user.email && user.nickname && user.password) {
    const res = await userServices.signinClient(user as IUserData);
    if ("message" in res) return res;
    localStorage.setItem("session_id", res.session_id);
    return res;
  }
  return {
    message: "Invalid username or email address",
  };
};
