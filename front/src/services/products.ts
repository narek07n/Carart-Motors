import axios from "axios";
import "dotenv/config";
import { IProductData, IProductResponse } from "@/utils/types/products";

export class ProductServices {
  private baseUrl;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  }

  public async addProduct(
    product: IProductData
  ): Promise<IProductResponse | { message: string }> {
    try {
      const { data } = await axios.post<IProductResponse>(
        `${this.baseUrl}/products`,
        product
      );
      if (!data) return { message: "Couldn't add product" };
      return data;
    } catch (err: any) {
      return { message: err.message };
    }
  }

  public async getProducts(): Promise<IProductResponse[]> {
    try {
      const { data } = await axios.get<IProductResponse[]>(
        `${this.baseUrl}/products`
      );
      if (!data) return [];
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  public async getProductById(
    product_id: string
  ): Promise<IProductResponse | { message: string }> {
    try {
      const { data } = await axios.get<IProductResponse>(
        `${this.baseUrl}/products/${product_id}`
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
