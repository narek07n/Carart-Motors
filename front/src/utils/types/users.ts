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
