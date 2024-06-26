import { Request, Response } from "express";
import { ProductServices } from "../services/products";

export default {
  async addProduct(req: Request, res: Response) {
    try {
      const product = await ProductServices.addProduct(req.body);
      res.status(200).send(product);
    } catch (error) {
      console.log(error);

      res.status(500).json(error);
    }
  },

  async getProducts(_: Request, res: Response) {
    try {
      const products = await ProductServices.getProducts();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getProductById(req: Request, res: Response) {
    try {
      const { product_id } = req.params;
      const products = await ProductServices.getProductById(product_id);
      res.status(200).send(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
