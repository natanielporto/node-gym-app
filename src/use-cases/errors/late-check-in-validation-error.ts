export class LateCheckInValidationError extends Error {
  constructor() {
    super("Check in expired after 20 minutes of waiting time.");
  }
}
