import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@tkticketingv2/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
