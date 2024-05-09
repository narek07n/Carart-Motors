import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import { IUserData, IUserResponse } from "../types";
import DB from "../DB";
import { object, string } from "yup";

export class UserServices {
  static async SignupClient(data: IUserData): Promise<IUserResponse> {
    let userSchema = object({
      password: string().min(6),
      nickname: string().required(),
      email: string().email(),
    });
    const user = await userSchema.validate(data);
    const session_id = nanoid();
    const user_id = nanoid();
    if (!user.email || !user.nickname || !user.password)
      throw Error("Invalid user data");
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await DB<IUserResponse>("users").insert({
      ...user,
      password: hashedPassword,
      role: 0,
      session_id,
      user_id,
    });

    const newUser = await DB<IUserResponse>("users").where({ user_id }).first();
    if (!newUser) throw Error("Cannot add new user");
    return newUser;
  }

  static async LoginClient({
    nickname,
    password,
  }: Pick<IUserData, "nickname" | "password">): Promise<IUserResponse> {
    const user = await DB<IUserResponse>("users").where({ nickname }).first();
    if (!user) throw Error("Wrong nickname");
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw Error("Wrong password");

    const updatedCount = await DB<IUserResponse>("users")
      .where({ nickname })
      .update({ session_id: nanoid() });
    if (updatedCount !== 1) throw new Error("Can't update user");

    const newUser = await DB<IUserResponse>("users")
      .where({ nickname })
      .first();
    if (!newUser) throw Error("Database error");
    return newUser;
  }

  static async getUserBySession(session_id: string) {
    const user = await DB<IUserResponse>("users").where({ session_id }).first();
    if (!user) throw Error("Invalid session");
    return user;
  }
}
