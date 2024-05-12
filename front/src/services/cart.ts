import axios from "axios";
import "dotenv/config";
import { ICartData, ICartResponse } from "@/utils/types/cart";
import { IProductResponse } from "@/utils/types/products";

export class CartServices {
  private baseUrl;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  }

  public async addProduct(
    user_id: string,
    product_id: string
  ): Promise<ICartResponse | { message: string }> {
    try {
      const { data } = await axios.post<ICartResponse>(`${this.baseUrl}/cart`, {
        user_id,
        product_id,
      });
      if (!data) return { message: "Couldn't add product to cart" };
      return data;
    } catch (err: any) {
      return { message: err.message };
    }
  }

  public async getProducts(
    user_id: string
  ): Promise<(ICartResponse & IProductResponse)[]> {
    try {
      const { data } = await axios.get<(ICartResponse & IProductResponse)[]>(
        `${this.baseUrl}/cart/${user_id}`
      );
      if (!data) return [];
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  public async getProductById(
    user_id: string,
    product_id: string
  ): Promise<ICartResponse | { message: string }> {
    try {
      const { data } = await axios.get<ICartResponse>(
        `${this.baseUrl}/products/${user_id}/${product_id}`
      );
      if (!data)
        return { message: `Didn't find product with id: ${product_id}` };
      return data;
    } catch (err: any) {
      console.log(err);
      return { message: err.message };
    }
  }
}
