import { Request, Response } from "express";
import { Ticket } from "../models/ticket";

export const indexTicketController = async (req: Request, res: Response) => {
  const tickets = await Ticket.find({ orderId: undefined });

  res.send(tickets);
};
