"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import { Box, Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import { IUserResponse } from "@/utils/types/users";
import { UserServices } from "@/services/users";

export default function Confirm() {
  const router = useRouter();
  const [user, setUser] = useState<IUserResponse>();
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const userServices = new UserServices();

  useEffect(() => {}, []);
  userServices.getUser().then((res) => {
    setUser(res ?? undefined);
  });

  function handleRemove(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <Box className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.title}>Confirm Your Email</h3>
        <Input
          value={code}
          onChange={(ev) => setCode(ev.target.value)}
          className={styles.input}
          placeholder="Confirm code"
        />
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            if (code === user?.one_time_code) {
              router.push("/my-cars");
            } else {
              handleRemove(user?.user_id ?? "");
            }
          }}
        >
          Confirm
        </Button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </Box>
  );
}
