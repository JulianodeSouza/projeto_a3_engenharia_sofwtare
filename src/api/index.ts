import { Router } from "express";
import { Request, Response, NextFunction } from "express";

export const router = Router();

router.use((_req: Request, _res: Response, next: NextFunction) => {
  _res.header("Access-Control-Allow-Origin", "*");
  _res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  next();
});
