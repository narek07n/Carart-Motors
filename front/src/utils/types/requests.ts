export interface IRequestsData {
  status?: number;
  user_id: string;
  product_id: string;
}

export interface IRequestsResponse {
  user_id: string;
  product_id: string;
  request_id: string;
  status: ReqStatuses;
}

export enum ReqStatuses {
  PENDING = 0,
  OK = 1,
  NO_OK = 2,
}
