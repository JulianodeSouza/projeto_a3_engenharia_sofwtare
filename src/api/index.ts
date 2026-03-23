import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { router as visagismAgentRouter } from "./routes/visagismAgent";
import { errorHandler } from "./middlewares/error-handler";
import { upload } from "@/infra/config/upload";

export const router = Router();

router.use((_req: Request, _res: Response, next: NextFunction) => {
  _res.header("Access-Control-Allow-Origin", "*");
  _res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  next();
});

router.use("/visagism-analysis", upload.single("photo"), visagismAgentRouter);
router.use("/visagism-analysis", errorHandler);
