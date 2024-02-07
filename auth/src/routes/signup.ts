import express from "express";
import { body } from "express-validator";

import { signupController } from "../controllers/signup";
import { validateRequest } from "@tkticketingv2/common";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Please provide a valid email."),
    body("password")
      .trim()
      .isLength({ min: 4 })
      .withMessage("Password must be greater than 4 characters"),
  ],
  validateRequest,
  signupController
);

export { router as signupRouter };
