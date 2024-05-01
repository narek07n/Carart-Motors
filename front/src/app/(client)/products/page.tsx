"use client";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Box } from "@mui/material";
import { Product } from "@/components/features/product";
import { IProductResponse } from "@/utils/types/products";
import { ProductServices } from "@/services/products";

import styles from "./styles.module.scss";

export default function Products() {
  const [data, setData] = useState<IProductResponse[]>([]);
  const productServices = new ProductServices();
  useEffect(() => {
    productServices
      .getProducts()
      .then((res) => {
        setData(res);
      })
      .catch(() => setData([]));
  }, []);

  return (
    <Box className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <Box className={styles.products}>
        {data.map((product) => (
          <Product
            key={nanoid()}
            name={product.name}
            descr={product.descr}
            image={product.img_url}
            price={product.price}
            id={product.product_id}
          />
        ))}
      </Box>
    </Box>
  );
}
