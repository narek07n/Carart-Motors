"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { Image } from "@/components/shared/image";
import { IProductProps } from "./types";

import styles from "./styles.module.scss";

export const Product = ({
  id,
  name,
  descr,
  image,
  price,
}: IProductProps): JSX.Element => {
  const [showDescr, setShowDescr] = useState<boolean>(false);
  const [description, setDescripton] = useState<string>(
    descr.slice(0, 55) + " ..."
  );
  useEffect(() => {
    setDescripton(() => {
      return showDescr ? descr : descr.slice(0, 55) + " ...";
    });
  }, [showDescr]);

  return (
    <Box className={styles.container}>
      <Image className={styles.image} src={image} alt="product" />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>$ {price}</span>
      <p className={styles.descr}>{description}</p>
      <button
        className={styles.more}
        onClick={() => setShowDescr((prev) => !prev)}
      >
        show{showDescr ? " less" : " more"}
      </button>
      <Link className={styles.button} href={`/products/${id}`}>
        Open
      </Link>
    </Box>
  );
};
