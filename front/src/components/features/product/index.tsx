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
  return (
    <Box className={styles.container}>
      <Image className={styles.image} src={image} alt="product" />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>$ {price}</span>
      <p className={styles.descr}>{descr}</p>
      <Link className={styles.button} href={`/products/${id}`}>
        Open
      </Link>
    </Box>
  );
};
