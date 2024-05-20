"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { Image } from "@/components/shared/image";
import { imagesPNG } from "@/utils/constants/imagesSRC";
import { PropsWithChildren, useEffect } from "react";
import { UserServices } from "@/services/users";
import { Cart } from "@/components/features/cartIcon";

import styles from "./styles.module.scss";

export default function Admin({ children }: PropsWithChildren) {
  const userServices = new UserServices();
  const router = useRouter();

  useEffect(() => {
    userServices
      .getUser()
      .then((res) => {
        if (!res?.role || res?.role !== 1) {
          router.push("/products");
        }
      })
      .catch(() => router.push("/products"));
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Box className={styles.container}>
          <Box className={styles.block}>
            <Link href="/">
              <Image alt="logo" src={imagesPNG.logo} className={styles.logo} />
            </Link>
            <Link className={styles.link} href="/products">
              Products
            </Link>
            <Link className={styles.link} href="/my-cars">
              My Cars
            </Link>
          </Box>
          <Box className={styles.block}>
            <Cart />
            <Link className={styles.link} href="/login">
              Login
            </Link>
            <Link className={styles.link} href="/signup">
              Signup
            </Link>
          </Box>
        </Box>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
