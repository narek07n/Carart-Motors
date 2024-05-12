import { Request, Response } from "express";
import { CartServices } from "../services/cart";

export default {
  async addProduct(req: Request, res: Response) {
    try {
      const product = await CartServices.addProduct(req.body);
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  async getProductsByUserId(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const products = await CartServices.getProductsByUserId(user_id);
      res.status(200).send(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getProductById(req: Request, res: Response) {
    try {
      const { user_id, product_id } = req.params;
      const products = await CartServices.getProductById(user_id, product_id);
      res.status(200).send(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
