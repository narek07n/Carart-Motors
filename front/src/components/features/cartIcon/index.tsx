import Link from "next/link";
import { Image } from "@/components/shared/image";
import { imagesSVG } from "@/utils/constants/imagesSRC";
import { ICartIconProps } from "./types";

import styles from "./styles.module.scss";

export const Cart = ({ number }: ICartIconProps) => {
  return (
    <Link className={styles.container} href="/cart">
      <Image alt="logo" src={imagesSVG.cart} className={styles.logo} />
      {number > 0 && <span className={styles.indicator} >{number}</span>}
    </Link>
  );
};
