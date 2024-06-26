"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import { IRequestsResponse } from "@/utils/types/requests";
import { RequestService } from "@/services/requests";
import { Box } from "@mui/material";

import styles from "./styles.module.scss";
import { requestStates } from "./constants";
import { RequestModal } from "@/components/features/requestModal";

export default function Requests() {
  const [requsts, setRequests] = useState<IRequestsResponse[]>([]);
  const [modal, setModal] = useState<{
    open: boolean;
    id: string;
    request_id: string;
  }>({
    id: "",
    open: false,
    request_id: "",
  });
  const requestServices = new RequestService();

  useEffect(() => {
    requestServices.getResponses().then((res) => setRequests(res));
  }, []);

  return (
    <Box className={styles.container}>
      <h3 className={styles.title}>Requests</h3>
      <Box className={styles.requests}>
        {requsts.map((res) => (
          <Box
            key={res.request_id}
            className={styles.request}
            onClick={(ev) => {
              res.status === 0 &&
                setModal({
                  open: true,
                  id: res.product_id,
                  request_id: res.request_id,
                });
            }}
          >
            <span className={styles.name}>
              Request:{" "}
              <span className={styles.identifier}>{res.product_id}</span>
            </span>
            <span
              className={classNames(styles.indicator, {
                [styles.pending]: res.status === 0,
                [styles.active]: res.status === 1,
                [styles.deleted]: res.status === 2,
              })}
            >
              {requestStates[res.status]}
            </span>
          </Box>
        ))}
      </Box>
      <RequestModal
        open={modal.open}
        product_id={modal.id}
        request_id={modal.request_id}
        onClose={() => setModal({ id: "", open: false, request_id: "" })}
      />
    </Box>
  );
}
