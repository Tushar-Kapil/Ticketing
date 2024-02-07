import { Request, Response } from "express";
import { User } from "../models/user";
import { BadRequestError } from "@tkticketingv2/common";
import { Password } from "../services/password";
import jwt from "jsonwebtoken";

export const signinController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    throw new BadRequestError("Invalid Credentials");
  }

  const passwordsMatch = await Password.compare(
    existingUser.password,
    password
  );

  if (!passwordsMatch) {
    throw new BadRequestError("Invalid Credentials");
  }

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!
  );

  // Set it on session object (cookie)
  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(existingUser);
};
