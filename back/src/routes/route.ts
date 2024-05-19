import { Router } from "express";

import CartRoutes from "./cart";
import UserRoutes from "./users";
import ProductRoutes from "./products";
import RequestsRouter from "./requests";

const router = Router();

router.use("/cart/", CartRoutes);
router.use("/users/", UserRoutes);
router.use("/products/", ProductRoutes);
router.use("/requests/", RequestsRouter);

export default router;
