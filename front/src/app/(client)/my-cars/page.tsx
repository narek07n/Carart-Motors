"use client";
import { useEffect, useState } from "react";
import {
  Box,
  InputBasePropsSizeOverrides,
  List,
  ListItem,
} from "@mui/material";
import { IRequestsResponse } from "@/utils/types/requests";
import { RequestService } from "@/services/requests";
import { IUserResponse } from "@/utils/types/users";
import { UserServices } from "@/services/users";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { requestStates } from "./constants";

export default function MyCars() {
  const [orders, setOrders] = useState<IRequestsResponse[]>([]);
  const [user, setUser] = useState<IUserResponse>();
  const requestServices = new RequestService();
  const userServices = new UserServices();

  useEffect(() => {
    userServices.getUser().then((res) => setUser(res ?? undefined));
  }, []);

  useEffect(() => {
    user &&
      requestServices
        .getResponsesByUser(user.user_id)
        .then((res) => setOrders(res));
  }, [user]);

  return (
    <Box className={styles.container}>
      <h3 className={styles.title}>My Orders</h3>
      <List className={styles.list}>
        {orders.map((item) => (
          <ListItem className={styles.listItem}>
            <span className={styles.name}>
              Order:
              <span className={styles.identifier}> {item.product_id}</span>
            </span>
            <span
              className={classNames(styles.indicator, {
                [styles.pending]: item.status === 0,
                [styles.active]: item.status === 1,
                [styles.deleted]: item.status === 2,
              })}
            >
              {requestStates[item.status]}
            </span>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
