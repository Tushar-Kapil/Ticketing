import { Publisher, Subjects, TicketUpdatedEvent } from "@tkticketingv2/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
