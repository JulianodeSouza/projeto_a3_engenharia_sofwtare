import { Router } from "express";
import { makeVisagismAnalysis } from "./visagismAgent";

export const router = Router();

router.post("/:id", makeVisagismAnalysis);
