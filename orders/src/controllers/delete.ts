import { Request, Response } from "express";
import { Order } from "../models/order";
import {
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
} from "@tkticketingv2/common";
import { OrderCancelledPublisher } from "../events/publishers/order-cancelled-publisher";
import { natsWrapper } from "../nats-wrapper";

export const deleteTicketController = async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.orderId).populate("ticket");

  if (!order) {
    throw new NotFoundError();
  }

  if (order.userId != req.currentUser!.id) {
    throw new NotAuthorizedError();
  }

  order.status = OrderStatus.Cancelled;
  await order.save();

  new OrderCancelledPublisher(natsWrapper.client).publish({
    id: order.id,
    version: order.version,
    ticket: {
      id: order.ticket.id,
    },
  });

  res.status(204).send(order);
};
