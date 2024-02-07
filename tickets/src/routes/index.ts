import express from "express";
import { indexTicketController } from "../controllers/index";

const router = express.Router();

router.get("/api/tickets", indexTicketController);

export { router as indexTicketRouter };
