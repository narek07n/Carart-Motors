"use client";
import Skeleton from "react-loading-skeleton";
import classNames from "classnames";
import { Button, Modal } from "@mui/material";
import { IRequestModalProps } from "./types";
import { useEffect, useState } from "react";
import { ProductServices } from "@/services/products";
import { IProductResponse } from "@/utils/types/products";
import { Image } from "@/components/shared/image";
import { RequestService } from "@/services/requests";

import styles from "./styles.module.scss";

export const RequestModal = ({
  open,
  request_id,
  product_id,
  onClose,
}: IRequestModalProps) => {
  const [product, setProduct] = useState<IProductResponse>();
  const [error, setError] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const productServices = new ProductServices();
  const requestServices = new RequestService();

  const handleClick = (type: "confirm" | "remove") => {
    requestServices.respond({
      status: type === "confirm" ? 1 : 2,
      request_id,
    });
  };

  const handleConfirm = handleClick.bind(null, "confirm");
  const handleRemove = handleClick.bind(null, "remove");

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
  }, [product_id]);

  return (
    <Modal onClose={onClose} className={styles.modal} open={open}>
      <div className={styles.window}>
        {!error && (pending || !product?.name) ? (
          <Skeleton baseColor="#9dc49e" height={300} />
        ) : error ? (
          <></>
        ) : (
          <>
            <div className={styles.text}>
              <h2 className={styles.name}>{product?.name}</h2>
              <span className={styles.price}>${product?.price}</span>
              <p className={styles.descr}>{product?.descr}</p>
              <Button
                onClick={handleConfirm}
                className={classNames(styles.button, styles.confirm)}
              >
                Confirm
              </Button>
              <Button
                onClick={handleRemove}
                className={classNames(styles.button, styles.remove)}
              >
                Remove
              </Button>
            </div>
            <Image
              src={product?.img_url ?? ""}
              alt={product?.name ?? ""}
              className={styles.image}
            />
          </>
        )}
      </div>
    </Modal>
  );
};
