import { NextFunction, Request, Response } from "express";
import { createFrequenciaService } from "../service/frequencia.service";
import { newFrequenciaData } from "../utils/types.zod";

export const createFrequenciaController = async (req: Request, res: Response, next: NextFunction) => {
  const parsedData = newFrequenciaData.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      message: "Erro de validação nos dados enviados",
      errors: parsedData.error.errors,
    });
  }

  try {
    const { frequencia, alunoId } = parsedData.data;
    const presenca = await createFrequenciaService({ frequencia, alunoId });
    return res.status(201).json(presenca);
  } catch (error) {
    if (error instanceof Error && error.message.includes("Erro de validação na service")) {
      return res.status(400).json({
        message: "Erro de validação na camada de service",
        details: JSON.parse(error.message.split(": ")[1]),
      });
    }
    next(error);
  }
};
