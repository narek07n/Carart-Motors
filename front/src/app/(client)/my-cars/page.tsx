"use client";
import { Box, List, ListItem } from "@mui/material";

import styles from "./styles.module.scss";

export default function MyCars() {
  return (
    <Box className={styles.container}>
      <h3 className={styles.title}>My Orders</h3>
      <List>
        <ListItem>Item</ListItem>
      </List>
    </Box>
  );
}
