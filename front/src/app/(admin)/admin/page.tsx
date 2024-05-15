"use client";

import { UserServices } from "@/services/users";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IUserResponse } from "@/utils/types/users";

export default function Admin() {
  const [user, setUser] = useState<IUserResponse>();
  const userServices = new UserServices();

  useEffect(() => {
    userServices.getUser().then((res) => setUser(res ?? undefined));
  }, []);

  return (
    <div className={styles.container}>
      {user && <p className={styles.user}>{user.nickname}</p>}
      <div className={styles.links}>
        <Link className={styles.link} href="/add-product">
          Add new Product
        </Link>
        <Link className={styles.link} href="/requests">
          Client requests
        </Link>
      </div>
    </div>
  );
}
