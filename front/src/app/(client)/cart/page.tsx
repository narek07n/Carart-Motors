import { nanoid } from "nanoid";
import { Box } from "@mui/material";
import { Product } from "@/components/features/product";
import { imagesSVG } from "@/utils/constants/imagesSRC";

import styles from "./styles.module.scss";
import { CartItem } from "@/components/features/cartItem";

export default function Products() {
  return (
    <Box className={styles.container}>
      <h2 className={styles.title}>Cart</h2>
      <Box className={styles.list}>
        {[0, 0, 0, 0, 0].map((_, i) => (
          <CartItem
            key={nanoid()}
            name="Product1"
            descr="Description about product 1, Some text here..."
            image={imagesSVG.example}
            price={0}
            id={String(i)}
          />
        ))}
      </Box>
    </Box>
  );
}
