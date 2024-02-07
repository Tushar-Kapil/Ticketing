import express from "express";
import { createTicketController } from "../controllers/new";
import { requireAuth, validateRequest } from "@tkticketingv2/common";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
  createTicketController
);

export { router as createTicketRouter };
