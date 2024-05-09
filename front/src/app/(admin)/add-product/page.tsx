"use client";
import { useState } from "react";
import { Button, Input } from "@mui/material";
import { IProductData } from "@/utils/types/products";

import styles from "./styles.module.scss";
import { handleProductSubmit } from "./helpers";

export default function AddProd() {
  const [data, setData] = useState<IProductData>({
    descr: "",
    img_url: "",
    name: "",
    price: 0,
  });

  const handleSubmit = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    await handleProductSubmit(data);
    setData({
      descr: "",
      img_url: "",
      name: "",
      price: 0,
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add product</h2>
      <form className={styles.form}>
        <Input
          onChange={(ev) =>
            setData((prev) => ({ ...prev, name: ev.target.value }))
          }
          value={data.name}
          className={styles.input}
          placeholder="Product name"
        />
        <Input
          onChange={(ev) =>
            setData((prev) => ({ ...prev, img_url: ev.target.value }))
          }
          value={data.img_url}
          className={styles.input}
          placeholder="Image URL"
        />
        <Input
          onChange={(ev) =>
            setData((prev) => ({ ...prev, descr: ev.target.value }))
          }
          value={data.descr}
          className={styles.input}
          placeholder="Product descr"
        />
        <Input
          onChange={(ev) =>
            setData((prev) => ({ ...prev, price: Number(ev.target.value) }))
          }
          value={data.price}
          className={styles.input}
          placeholder="Product price $"
        />
        <Button onClick={handleSubmit}>Add Product</Button>
      </form>
    </div>
  );
}
