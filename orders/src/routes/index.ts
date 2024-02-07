import express from "express";
import { indexTicketController } from "../controllers";

const router = express.Router();

router.get("/api/orders", indexTicketController);

export { router as indexOrderRouter };
