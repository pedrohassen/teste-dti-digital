import { NextFunction, Request, Response } from "express";
import { getAllDataService } from "../service/relatorio.service";

export const getAllDataController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const fullData = await getAllDataService();
    return res.status(200).json(fullData);
  } catch (error) {
    next(error);
  }
}