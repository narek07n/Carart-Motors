"use client";

import { useEffect, useState } from "react";
import { IRequestsResponse } from "@/utils/types/requests";
import { RequestService } from "@/services/requests";

import styles from "./styles.module.scss";

export default function Requests() {
  const [requsts, setRequests] = useState<IRequestsResponse[]>([]);
  const requestServices = new RequestService();

  useEffect(() => {
    requestServices.getResponses().then((res) => setRequests(res));
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Requests</h3>
      <div className={styles.requests}>{
        requsts.map(res => `${res.request_id} :: ${res.status}`)
      }</div>
    </div>
  );
}
