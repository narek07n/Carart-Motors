export interface IUserData {
  nickname: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  nickname: string;
  email: string;
  password: string;
  user_id: string;
  role: number;
  session_id: string;
  one_time_code: string;
}

export interface IProductResponse {
  price: number;
  img_url: string;
  name: string;
  descr: string;
  product_id: string;
  created_at: number;
}

export interface IProducData {
  price: number;
  img_url: string;
  name: string;
  descr: string;
}

export interface ICartResponse {
  product_id: string;
  user_id: string;
  added_at: number;
}

export interface ICartData {
  product_id: string;
  user_id: string;
}

export interface IRequestsData {
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