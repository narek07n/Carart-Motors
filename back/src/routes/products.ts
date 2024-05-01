import { Router } from "express";
import ProductController from "../controllers/products";
const router = Router();

router.get("/", ProductController.getProducts);
router.post("/", ProductController.addProduct);

export default router;
