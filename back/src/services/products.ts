import { nanoid } from "nanoid";
import DB from "../DB";
import { IProducData, IProductResponse } from "../types";

export class ProductServices {
  static async getProducts(): Promise<IProductResponse[]> {
    return await DB<IProductResponse>("products");
  }

  static async addProduct(data: IProducData): Promise<IProductResponse> {
    const product_id = nanoid();
    await DB<IProductResponse>("products").insert({
      ...data,
      created_at: Math.floor(new Date().getTime() / 1000),
      product_id,
    });
    const product = await DB<IProductResponse>("products")
      .where({ product_id })
      .first();
    if (!product) throw Error("cannot add product");
    return product;
  }
}
