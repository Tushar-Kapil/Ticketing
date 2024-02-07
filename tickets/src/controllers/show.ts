import { Request, Response } from "express";
import { Ticket } from "../models/ticket";
import { NotFoundError } from "@tkticketingv2/common";

export const showTicketController = async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
};
