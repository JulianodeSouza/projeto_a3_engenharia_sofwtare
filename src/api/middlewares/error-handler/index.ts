import { logMessage } from "@/utils";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: any,
  _req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  logMessage(error);

  const message = error.message || "Internal Server Error";
  const statusCode = error.statusCode || 500;

  _res.status(statusCode).json({
    data: { message },
  });
};
