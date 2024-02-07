import express from "express";

import { deleteTicketController } from "../controllers/delete";

const router = express.Router();

router.delete("/api/orders/:orderId", deleteTicketController);

export { router as deleteOrderRouter };
