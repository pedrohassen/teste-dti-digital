import { NextFunction, Request, Response } from "express";
import { createDesempenhoService } from "../service/desempenho.service";

export const createDesempenhoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { disciplinaId, nota, alunoId } = req.body;
    const desempenho = await createDesempenhoService({ disciplinaId, nota, alunoId });
    return res.status(201).json(desempenho);
  } catch (error) {
    next(error);
  }
}
