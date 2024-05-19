import { IRequestsData, IRequestsResponse } from "@/utils/types/requests";
import axios from "axios";

export class RequestService {
  private baseUrl;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  }
  public async getResponses(): Promise<IRequestsResponse[]> {
    try {
      const { data } = await axios.get<IRequestsResponse[]>(
        `${this.baseUrl}/requests`
      );
      if (!data) return [];
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  public async getResponsesByUser(
    user_id: string
  ): Promise<IRequestsResponse[]> {
    try {
      const { data } = await axios.get<IRequestsResponse[]>(
        `${this.baseUrl}/requests/${user_id}`
      );

      if (!data) return [];
      return data;
    } catch (err: any) {
      console.log(err.message);
      return [];
    }
  }

  public async request(
    request: IRequestsData
  ): Promise<IRequestsResponse | null> {
    try {
      const { data } = await axios.post<IRequestsResponse>(
        `${this.baseUrl}/requests`,
        request
      );
      if (!data) return null;
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async respond(
    request: Pick<IRequestsResponse, "status" | "request_id">
  ): Promise<IRequestsResponse | null> {
    try {
      const { data } = await axios.put<IRequestsResponse>(
        `${this.baseUrl}/requests/${request.request_id}`,
        {
          status: request.status,
        }
      );
      if (!data) return null;
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
