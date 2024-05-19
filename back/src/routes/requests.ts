import { Router } from "express";
import RequestsController from "../controllers/requests";
const router = Router();

router.post("/", RequestsController.request);
router.get("/", RequestsController.getRequests);
router.get("/:user_id", RequestsController.getRequestsByUser);
router.put("/:request_id", RequestsController.respond);

export default router;
