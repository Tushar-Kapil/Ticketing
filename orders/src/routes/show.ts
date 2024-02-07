import express from "express";

import { showTicketController } from "../controllers/show";

const router = express.Router();

router.get("/api/orders/:orderId", showTicketController);

export { router as showOrderRouter };
