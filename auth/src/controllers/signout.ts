import { Request, Response } from "express";

export const signoutController = async (req: Request, res: Response) => {
  req.session = null;

  res.send({});
};
