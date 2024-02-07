import { Request, Response } from "express";
import { Order } from "../models/order";
import { NotAuthorizedError, NotFoundError } from "@tkticketingv2/common";

export const showTicketController = async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.orderId).populate("ticket");

  if (!order) {
    throw new NotFoundError();
  }

  if (order.userId != req.currentUser!.id) {
    throw new NotAuthorizedError();
  }

  res.send(order);
};
