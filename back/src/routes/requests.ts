import { Router } from "express";
import RequestsController from "../controllers/requests";
const router = Router();

router.post("/", RequestsController.request);
router.put("/:request_id", RequestsController.respond);
router.get("/", RequestsController.getRequests);

export default router;
