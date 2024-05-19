"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Image } from "@/components/shared/image";
import { RequestService } from "@/services/requests";
import { UserServices } from "@/services/users";
import { IUserResponse } from "@/utils/types/users";
import { ICartItemProps } from "./types";

import styles from "./styles.module.scss";

export const CartItem = ({
  id,
  name,
  image,
  descr,
  price,
}: ICartItemProps): JSX.Element => {
  const [user, setUser] = useState<IUserResponse>();
  const requestServices = new RequestService();
  const userServices = new UserServices();
  const handleSendRequest = () => {
    user && requestServices.request({ product_id: id, user_id: user.user_id });
  };

  useEffect(() => {
    userServices.getUser().then((res) => setUser(res ?? undefined));
  }, []);

  return (
    <Link href={`/products/${id}`} className={styles.container}>
      <Image src={image} alt="cart-item" className={styles.image} />
      <Box className={styles.box}>
        <Box className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.price}>Price ${price}</span>
          <p className={styles.descr}>{descr}</p>
        </Box>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            handleSendRequest();
          }}
          className={styles.button}
        >
          Buy
        </Button>
      </Box>
    </Link>
  );
};
