"use client";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Box, Button } from "@mui/material";
import { Image } from "@/components/shared/image";
import { ProductServices } from "@/services/products";
import { IProductResponse } from "@/utils/types/products";
import { handleAddToCart, initialData } from "./constats";
import { IUserResponse } from "@/utils/types/users";
import { UserServices } from "@/services/users";

import styles from "./styles.module.scss";

export default function Product({ params }: { params: { product: string } }) {
  const [product, setProduct] = useState<IProductResponse>(initialData);
  const [user, setUser] = useState<IUserResponse>();
  const [error, setError] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const productServices = new ProductServices();
  const userServices = new UserServices();

  useEffect(() => {
    setPending(true);
    userServices
      .getUser()
      .then((res) => setUser(res ?? undefined))
      .catch((err) => console.log(err));
    productServices
      .getProductById(params.product)
      .then((res) => {
        if ("message" in res) {
          setError(res.message);
        } else {
          setProduct(res);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setPending(false));
  }, []);

  return (
    <Box className={styles.container}>
      {error ? (
        <h2 className={styles.error}>{error}</h2>
      ) : (
        <>
          <Box className={styles.left}>
            {pending || !product.img_url ? (
              <Skeleton
                borderRadius={0}
                className={styles.image}
                baseColor="#040410"
              />
            ) : (
              <Image
                className={styles.image}
                src={product.img_url}
                alt={product.name}
              />
            )}
          </Box>
          <Box className={styles.right}>
            <span className={styles.name}>{product.name}</span>
            <span className={styles.price}>Price ${product.price}</span>
            <Box className={styles.bottom}>
              <p className={styles.descr}>{product.descr}</p>
              <Box className={styles.images}>
                {pending || !product.img_url ? (
                  <div className={styles.loader}>
                    <Skeleton
                      borderRadius={0}
                      baseColor="#040410"
                      style={{ height: "100%" }}
                    />
                  </div>
                ) : (
                  <Image
                    className={styles.imagesItem}
                    src={product.img_url}
                    alt={product.name}
                  />
                )}
                {pending || !product.img_url ? (
                  <div className={styles.loader}>
                    <Skeleton
                      borderRadius={0}
                      baseColor="#040410"
                      style={{ height: "100%" }}
                    />
                  </div>
                ) : (
                  <Image
                    className={styles.imagesItem}
                    src={product.img_url}
                    alt={product.name}
                  />
                )}
                {pending || !product.img_url ? (
                  <div className={styles.loader}>
                    <Skeleton
                      borderRadius={0}
                      baseColor="#040410"
                      style={{ height: "100%" }}
                    />
                  </div>
                ) : (
                  <Image
                    className={styles.imagesItem}
                    src={product.img_url}
                    alt={product.name}
                  />
                )}
              </Box>
              {user && <div className={styles.buttons}>
                <Button onClick={() => {}} className={styles.button}>
                  Buy
                </Button>
                <Button onClick={() => handleAddToCart(user.user_id, product.product_id)} className={styles.button}>
                  Add to Cart
                </Button>
              </div>}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
