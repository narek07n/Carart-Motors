"use client";
import { object, string} from "yup";
import { Button, Input } from "@mui/material";

import styles from "./styles.module.scss";

export default function Signup() {
  const handleSubmit = async (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    let userSchema = object({
      password: string().min(6),
      nickname: string().required(),
      email: string().email(),
    });
    const user = await userSchema.validate({
      nickname: "Raz",
      password: "z27$",
      email: "razmikachikyan5@gmail.com",
    });
    console.log(user); // userdata or error(need to handle)
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.title}>Create an Account</h3>
        <Input className={styles.input} placeholder="Username" />
        <Input className={styles.input} placeholder="Email" />
        <Input className={styles.input} placeholder="Password" />
        <Input className={styles.input} placeholder="Confirm Password" />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
}
