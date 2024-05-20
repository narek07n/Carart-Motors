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
  one_time_code: string;
  session_id: string;
}
