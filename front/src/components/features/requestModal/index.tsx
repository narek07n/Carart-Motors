"use client";
import { Modal } from "@mui/material";
import { IRequestModalProps } from "./types";
import { useEffect, useState } from "react";
import { ProductServices } from "@/services/products";

import styles from "./styles.module.scss";
import { IProductResponse } from "@/utils/types/products";
import Skeleton from "react-loading-skeleton";

export const RequestModal = ({
  open,
  product_id,
  onClose,
}: IRequestModalProps) => {
  const [product, setProduct] = useState<IProductResponse>();
  const [error, setError] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const productServices = new ProductServices();

  useEffect(() => {
    setPending(true);
    productServices
      .getProductById(product_id)
      .then((res) => {
        if ("message" in res) {
          setError(res.message);
        } else setProduct(res);
      })
      .catch((err) => setError(err.message))
      .finally(() => setPending(false));
  }, []);

  return (
    <Modal onClose={onClose} className={styles.modal} open={open}>
      <div className={styles.window}>
        {true ? (
          <Skeleton baseColor="#9dc49e" height={300} />
        ) : (
          <div>{error ? error : product?.name} jaj</div>
        )}
      </div>
    </Modal>
  );
};
