"use client";
import { useRouter } from "next/navigation";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { IUserData } from "@/utils/types/users";
import { loginUser } from "./helpers";

import styles from "./styles.module.scss";

export default function Login() {
  const [data, setData] = useState<Pick<IUserData, "nickname" | "password">>({
    nickname: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    try {
      const res = await loginUser(data);
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
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.title}>Log in</h3>
        <Input
          value={data.nickname}
          onChange={(ev) =>
            setData((prev) => ({ ...prev, nickname: ev.target.value }))
          }
          className={styles.input}
          placeholder="Username"
        />
        <Input
          value={data.password}
          onChange={(ev) =>
            setData((prev) => ({ ...prev, password: ev.target.value }))
          }
          className={styles.input}
          placeholder="Password"
        />
        <Button onClick={handleSubmit}>Log in</Button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
