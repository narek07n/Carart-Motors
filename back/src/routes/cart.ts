import { Router } from "express";
import CartController from "../controllers/cart";
const router = Router();

router.post("/", CartController.addProduct);
router.get("/:user_id", CartController.getProductsByUserId);
router.get("/:user_id/:product_id", CartController.getProductById);

export default router;
