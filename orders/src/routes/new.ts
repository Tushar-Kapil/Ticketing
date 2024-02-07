import express from "express";
import { newTicketController } from "../controllers/new";
import { requireAuth, validateRequest } from "@tkticketingv2/common";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [body("ticketId").not().isEmpty().withMessage("TicketId must be provided")],
  validateRequest,
  newTicketController
);

export { router as newOrderRouter };
