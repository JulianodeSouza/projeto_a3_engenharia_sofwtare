import ServiceVisagismAgent from "@/services/visagismAi";
import { Request, Response } from "express";

export async function makeVisagismAnalysis(_req: Request, _res: Response) {
  const service = ServiceVisagismAgent.getInstance();
  const idUser = Number(_req.params.id);
  const userPhoto = _req.file?.path;

  const facialAnalysis = await service.processFacialPhoto(idUser, userPhoto);

  _res.json(facialAnalysis);
}
