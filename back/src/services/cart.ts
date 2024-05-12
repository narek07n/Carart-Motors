import DB from "../DB";
import { ICartData, ICartResponse, IProductResponse } from "../types";

export class CartServices {
  static async getProductsByUserId(user_id: string): Promise<(ICartResponse & IProductResponse)[]> {
    return await DB<ICartResponse & IProductResponse>("cart")
      .join("products", "cart.product_id", "products.product_id")
      .where({ "cart.user_id": user_id });
  }

  static async getProductById(
    user_id: string,
    product_id: string
  ): Promise<ICartResponse> {
    const product = await DB<ICartResponse>("cart")
      .where({ product_id, user_id })
      .first();
    if (!product)
      throw Error(`Product with id: ${product_id} doesn't exist in the cart`);
    return product;
  }

  static async addProduct({
    product_id,
    user_id,
  }: ICartData): Promise<ICartResponse> {
    await DB<ICartResponse>("cart").insert({
      user_id,
      product_id,
      added_at: Math.floor(new Date().getTime() / 1000),
    });
    const product = await DB<ICartResponse>("cart")
      .where({ product_id: product_id, user_id: user_id })
      .first();
    if (!product) throw Error("cannot add product");
    return product;
  }
}
