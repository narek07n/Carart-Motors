import Link from "next/link";
import { Box } from "@mui/material";
import { Image } from "@/components/shared/image";
import { ICartItemProps } from "./types";

import styles from "./styles.module.scss";

export const CartItem = ({
  id,
  name,
  image,
  descr,
  price,
}: ICartItemProps): JSX.Element => {
  return (
    <Link href={`/cart/${id}`} className={styles.container}>
      <Image src={image} alt="cart-item" className={styles.image} />
      <Box className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>Price ${price}</span>
        <p className={styles.descr}>{descr}</p>
      </Box>
    </Link>
  );
};