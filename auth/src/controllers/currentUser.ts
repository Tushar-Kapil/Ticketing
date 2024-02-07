import { Request, Response } from "express";

export const currentuserHandler = (req: Request, res: Response) => {
  res.send({ currentUser: req.currentUser || null });
};
