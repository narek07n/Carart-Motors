import { Router } from "express";
import ProductController from "../controllers/products";
const router = Router();

router.post("/", ProductController.addProduct);
router.get("/", ProductController.getProducts);
router.get("/:product_id", ProductController.getProductById);

export default router;
