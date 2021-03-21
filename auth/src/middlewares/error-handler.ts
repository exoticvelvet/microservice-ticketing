import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connnection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map((e) => {
      return { message: e.msg, field: e.param };
    });
    return res.status(400).send({ errors: formattedErrors });
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(500).send({ errors: err.reason });
  }

  console.error("Something went wrong", err);
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
