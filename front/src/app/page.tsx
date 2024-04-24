import Link from "next/link";
import { Box } from "@mui/material";
import Image from "next/image";
import { imagesPNG } from "@/utils/constants/imagesSRC";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Box className={styles.container}>
          <Box className={styles.block}>
            <Link className={styles.link} href="/products">
              products
            </Link>
            <Link className={styles.link} href="/my-cars">
              my cars
            </Link>
          </Box>
          <Box className={styles.block}>
            <Link className={styles.link} href="/login">
              login
            </Link>
            <Link className={styles.link} href="/signup">
              signup
            </Link>
          </Box>
        </Box>
      </header>
      <main className={styles.main}>
        <Box className={styles.box}>
          <Image
            className={styles.logo}
            width={600}
            height={450}
            src={imagesPNG.logo}
            alt="logo"
          />
          <h1 className={styles.title}>CARART MOTORS</h1>
        </Box>
      </main>
    </>
  );
}
