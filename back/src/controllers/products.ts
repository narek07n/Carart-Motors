import { Request, Response } from "express";

export default {
  async addProduct(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getProducts(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
