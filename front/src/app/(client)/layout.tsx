import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

import styles from "./layout.module.scss";
import Link from "next/link";
import { Image } from "@/components/shared/image";
import { imagesPNG, imagesSVG } from "@/utils/constants/imagesSRC";
import { Cart } from "@/components/features/cartIcon";

export default function Client({ children }: PropsWithChildren) {
  return (
    <>
      <header className={styles.header}>
        <Box className={styles.container}>
          <Box className={styles.block}>
            <Link href="/">
              <Image alt="logo" src={imagesPNG.logo} className={styles.logo} />
            </Link>
            <Link className={styles.link} href="/products">
              products
            </Link>
            <Link className={styles.link} href="/my-cars">
              my cars
            </Link>
          </Box>
          <Box className={styles.block}>
            <Cart />
            <Link className={styles.link} href="/login">
              login
            </Link>
            <Link className={styles.link} href="/signup">
              signup
            </Link>
          </Box>
        </Box>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
