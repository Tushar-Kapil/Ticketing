import express from "express";
import { body } from "express-validator";

import { signinController } from "../controllers/signin";
import { validateRequest } from "@tkticketingv2/common";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Please provide a valid email."),
    body("password").trim().notEmpty().withMessage("Please provide a password"),
  ],
  validateRequest,
  signinController
);

export { router as signinRouter };
