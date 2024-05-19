import { nanoid } from "nanoid";
import DB from "../DB";
import { IRequestsData, IRequestsResponse, ReqStatuses } from "../types";

export class RequestsServices {
  static async request(data: IRequestsData): Promise<IRequestsResponse> {
    const request_id = nanoid();
    await DB<IRequestsResponse>("requests").insert({
      ...data,
      request_id,
      status: 0,
    });
    const request = await DB<IRequestsResponse>("requests")
      .where({
        request_id,
      })
      .first();
    if (!request) throw Error("Couldn't add new request");
    return request;
  }

  static async respond(
    request_id: string,
    status: ReqStatuses
  ): Promise<IRequestsResponse> {
    const updated = await DB<IRequestsResponse>("requests")
      .where({
        request_id,
      })
      .update({ status });
    if (updated !== 1)
      throw Error(`Couldn't update request with id::${request_id}`);
    const request = await DB<IRequestsResponse>("requests")
      .where({
        request_id,
      })
      .first();
    if (!request) throw Error(`Couldn't find request with id ::${request_id}`);
    return request;
  }

  static async getRequests(): Promise<IRequestsResponse[]> {
    return await DB<IRequestsResponse>("requests");
  }
}
