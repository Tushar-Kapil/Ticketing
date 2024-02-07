import express from "express";
import { showTicketController } from "../controllers/show";

const router = express.Router();

router.get("/api/tickets/:id", showTicketController);

export { router as showTicketRouter };
