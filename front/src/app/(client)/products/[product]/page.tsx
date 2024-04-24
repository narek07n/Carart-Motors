"use client";

import { Box } from "@mui/material";
import { Image } from "@/components/shared/image";

import styles from "./styles.module.scss";
import { imagesPNG } from "@/utils/constants/imagesSRC";

export default function Product({ params }: { params: { product: string } }) {
  const name = "Product 1";
  const price = 0; // get by product id from params
  const descr =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam pariatur accusamus natus sint sit ipsum ab, labore repudiandae sapiente voluptatum in dolorum odio quidem quod? Exercitationem similique modi veritatis.";
  return (
    <Box className={styles.container}>
      <Box className={styles.left}>
        <Image className={styles.image} src={imagesPNG.logo} alt={name} />
      </Box>
      <Box className={styles.right}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>Price ${price}</span>
        <Box className={styles.bottom}>
          <p className={styles.descr}>{descr}</p>
          <Box className={styles.images}>
            <Image
              className={styles.imagesItem}
              src={imagesPNG.logo}
              alt={name}
            />
            <Image
              className={styles.imagesItem}
              src={imagesPNG.logo}
              alt={name}
            />
            <Image
              className={styles.imagesItem}
              src={imagesPNG.logo}
              alt={name}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
