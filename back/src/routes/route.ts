import { Router } from "express";

import UserRoutes from "./users";
import ProductRoutes from "./products";

const router = Router();

router.use("/users/", UserRoutes);
router.use("/products/", ProductRoutes);

export default router;
