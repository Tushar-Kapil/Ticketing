import { Publisher, TicketCreatedEvent, Subjects } from "@tkticketingv2/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
