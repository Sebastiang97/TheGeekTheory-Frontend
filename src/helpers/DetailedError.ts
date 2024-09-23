export class DetailedError extends Error {
    details:any
    constructor(message:string, details:any) {
      super(message);
      this.details = details;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }