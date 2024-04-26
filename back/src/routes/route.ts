import { Router } from "express";

import AdminRoutes from "./admins";
import ClientRoutes from "./clients";
import ProductRoutes from "./products";

const router = Router();

router.use("/admin", AdminRoutes);
router.use("/clients", ClientRoutes);
router.use("/products", ProductRoutes);

export default router;
