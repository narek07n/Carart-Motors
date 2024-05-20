import { UserServices } from "@/services/users";

const userServices = new UserServices();

export const handlRemove = async (user_id: string) => {
  await userServices.removeUser(user_id);
};
