import { Request, Response } from "express";

export default {
  async Signup(req: Request, res: Response) {
    try {
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
