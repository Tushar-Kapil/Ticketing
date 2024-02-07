export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super();

    //For Extending A Built In Class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string }[];
}
