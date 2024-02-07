import express from "express";
import "express-async-errors";
import mongoose, { Error } from "mongoose";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "@tkticketingv2/common";
import { NotFoundError } from "@tkticketingv2/common";

const app = express();
app.set("trust proxy", true);

// MIDDLEWARES
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

// ROUTES
app.use(signupRouter);
app.use(signinRouter);
app.use(currentUserRouter);
app.use(signoutRouter);

// ERRORS
app.get("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

start();
