import { Box } from "@mui/material";
import classNames from "classnames";
import NextImage from "next/image";
import { IImageProps } from "./types";

import styles from "./styles.module.scss";

export const Image = ({
  css,
  className,
  ...rest
}: IImageProps): JSX.Element => {
  return (
    <Box style={css} className={classNames(styles.container, className)}>
      <NextImage {...rest} fill className={styles.image} />
    </Box>
  );
};
