"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Image } from "@/components/shared/image";
import { imagesSVG } from "@/utils/constants/imagesSRC";
import { CartServices } from "@/services/cart";
import { UserServices } from "@/services/users";
import { IUserResponse } from "@/utils/types/users";

import styles from "./styles.module.scss";

export const Cart = () => {
  const [number, setNumber] = useState<number>(0);
  const [user, setUser] = useState<IUserResponse>();
  const cartServices = new CartServices();
  const userServices = new UserServices();

  useEffect(() => {
    user &&
      cartServices
        .getProducts(user.user_id)
        .then((res) => setNumber(res.length ?? 0))
        .catch((err) => console.log(err));
  }, [user]);

  useEffect(() => {
    userServices
      .getUser()
      .then((res) => setUser(res ?? undefined))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link className={styles.container} href="/cart">
      <Image alt="logo" src={imagesSVG.cart} className={styles.logo} />
      {number > 0 && <span className={styles.indicator}>{number}</span>}
    </Link>
  );
};
