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
