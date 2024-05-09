import { object, string, number } from "yup";
import { ProductServices } from "@/services/products";
import { IProductData, IProductResponse } from "@/utils/types/products";

export const handleProductSubmit = async (
  data: IProductData
): Promise<IProductResponse | { message: string }> => {
  try {
    const productServices = new ProductServices();
    let userSchema = object({
      price: number().positive().required(),
      img_url: string().required(),
      name: string().required(),
      descr: string().required(),
    });

    const productData = await userSchema.validate(data);
    return await productServices.addProduct(productData);
  } catch (error: any) {
    return { message: error.message };
  }
};
