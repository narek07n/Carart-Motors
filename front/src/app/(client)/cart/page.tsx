"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CartItem } from "@/components/features/cartItem";
import { ICartResponse } from "@/utils/types/cart";
import { CartServices } from "@/services/cart";
import { UserServices } from "@/services/users";
import { IUserResponse } from "@/utils/types/users";
import { IProductResponse } from "@/utils/types/products";

import styles from "./styles.module.scss";

export default function Products() {
  const [items, setItems] = useState<(ICartResponse & IProductResponse)[]>([]);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<IUserResponse>();
  const cartServices = new CartServices();
  const userServices = new UserServices();
  useEffect(() => {
    userServices
      .getUser()
      .then((res) => setUser(res ?? undefined))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    user &&
      cartServices
        .getProducts(user.user_id)
        .then((res) => setItems(res))
        .catch((err: any) => setError(err.message));
  }, [user]);

  return (
    <Box className={styles.container}>
      <h2 className={styles.title}>Cart</h2>
      {error && <p>{error}</p>}
      <Box className={styles.list}>
        {items.map(({ descr, name, price, img_url, product_id }) => (
          <CartItem
            key={product_id}
            name={name}
            descr={descr}
            image={img_url}
            price={price}
            id={product_id}
          />
        ))}
      </Box>
    </Box>
  );
}
