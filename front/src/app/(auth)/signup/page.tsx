"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Box, Button, Input } from "@mui/material";
import { IUserData } from "@/utils/types/users";
import { addUser } from "./helpers";

import styles from "./styles.module.scss";

export default function Signup() {
  const [data, setData] = useState<IUserData>({
    email: "",
    nickname: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    try {
      if (!confirmed) throw Error("Wrong password confirmation");
      const res = await addUser(data);
      if ("message" in res) {
        setError(res.message);
        return;
      }
      router.push("/my-cars");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Box className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.title}>Create an Account</h3>
        <Input
          value={data.nickname}
          onChange={(ev) => {
            setData((prev) => ({ ...prev, nickname: ev.target.value }));
          }}
          className={styles.input}
          placeholder="Username"
        />
        <Input
          value={data.email}
          onChange={(ev) => {
            setData((prev) => ({ ...prev, email: ev.target.value }));
          }}
          className={styles.input}
          placeholder="Email"
        />
        <Input
          value={data.password}
          onChange={(ev) => {
            setData((prev) => ({ ...prev, password: ev.target.value }));
          }}
          className={styles.input}
          placeholder="Password"
        />
        <Input
          onChange={(ev) => setConfirmed(ev.target.value === data.password)}
          className={styles.input}
          placeholder="Confirm Password"
        />
        <Button onClick={handleSubmit}>Submit</Button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </Box>
  );
}
