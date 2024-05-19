import { Request, Response } from "express";
import { RequestsServices } from "../services/requests";

export default {
  async request(req: Request, res: Response) {
    try {
      const request = await RequestsServices.request(req.body);
      res.status(200).send(request);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  async respond(req: Request, res: Response) {
    try {
      const { request_id } = req.params;
      const { status } = req.body;
      const request = await RequestsServices.respond(request_id, status);
      res.status(200).send(request);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getRequests(_: Request, res: Response) {
    try {
      const requests = await RequestsServices.getRequests();
      res.status(200).send(requests);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async getRequestsByUser(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const requests = await RequestsServices.getRequestsByUser(user_id);
      res.status(200).send(requests);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
