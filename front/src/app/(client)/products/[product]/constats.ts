import { CartServices } from "@/services/cart";
import { ICartResponse } from "@/utils/types/cart";

export const initialData = {
  created_at: 0,
  descr: "",
  img_url: "",
  name: "",
  price: 0,
  product_id: "",
};

export const handleAddToCart = async (
  user_id: string,
  product_id: string
): Promise<ICartResponse | { message: string }> => {
  try {
    const cartServices = new CartServices();
    const item = await cartServices.addProduct(user_id, product_id);
    if (!item) throw Error("Cannot add product to cart");
    return item;
  } catch (error: any) {
    return { message: error.message };
  }
};
