"use client";
import { object, string } from "yup";
import { Button, Input } from "@mui/material";

import styles from "./styles.module.scss";

export default function Login() {
  const handleSubmit = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    let userSchema = object({
      password: string().min(6),
      nickname: string().required(),
    });
    const user = await userSchema.validate({
      nickname: "Raz",
      password: "z27$",
    });
    console.log(user); // userdata or error(need to handle)
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.title}>Log in</h3>
        <Input className={styles.input} placeholder="Username" />
        <Input className={styles.input} placeholder="Password" />
        <Button onClick={handleSubmit}>Log in</Button>
      </form>
    </div>
  );
}
