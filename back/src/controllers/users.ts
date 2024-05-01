import { Request, Response } from "express";
import { UserServices } from "../services/users";

export default {
  async SignupClient(req: Request, res: Response) {
    try {
      const newUser = await UserServices.SignupClient(req.body);
      res.status(200).send(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async LoginClient(req: Request, res: Response) {
    try {
      const newUser = await UserServices.LoginClient(req.body);
      res.status(200).send(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async Login(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
