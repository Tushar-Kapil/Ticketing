import { Request, Response } from "express";
import { User } from "../models/user";
import { BadRequestError } from "@tkticketingv2/common";
import jwt from "jsonwebtoken";

export const signupController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError("Email in use");
  }

  const user = User.build({ email, password });
  await user.save();

  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  // Set it on session object (cookie)
  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};
