import { Router } from "express";
import UsersController from "../controllers/users"

const router = Router();

router.get("/:session_id", UsersController.getUser);
router.post("/client/signup", UsersController.SignupClient);
router.post("/client/login", UsersController.LoginClient);

export default router;
