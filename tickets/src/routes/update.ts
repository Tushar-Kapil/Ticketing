import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@tkticketingv2/common";
import { updateTicketRouter } from "../controllers/update";
import { body } from "express-validator";

const router = express.Router();

router.put(
  "/api/tickets/:id",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
  updateTicketRouter
);

export { router as updateTicketRouter };
