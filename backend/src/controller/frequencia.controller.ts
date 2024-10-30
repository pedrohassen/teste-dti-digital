import { NextFunction, Request, Response } from "express";
import { createFrequenciaService } from "../service/frequencia.service";

export const createFrequenciaController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { frequencia, alunoId } = req.body;
    const presenca = await createFrequenciaService({ frequencia, alunoId });
    return res.status(201).json(presenca);
  } catch (error) {
    next(error);
  }
}