import express from "express";
import { currentuserHandler } from "../controllers/currentUser";
import { currentUser } from "@tkticketingv2/common";
import { requireAuth } from "@tkticketingv2/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, currentuserHandler);

export { router as currentUserRouter };
