import {
  Publisher,
  Subjects,
  OrderCancelledEvent,
} from "@tkticketingv2/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
