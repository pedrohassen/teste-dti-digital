import { newAlunoData } from "../utils/types.zod";
import { createAlunoService, deleteAlunoService, getAlunoByIdService, getAlunosService } from "../service/aluno.service";
import { NextFunction, Request, Response } from "express";

export const createAlunoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    newAlunoData.parse(req.body);
    const aluno = await createAlunoService(req.body);
    return res.status(201).json(aluno);
  } catch (error) {
    next(error);
  }
}

export const getAlunosController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const alunos = await getAlunosService();
    return res.status(200).json(alunos);
  } catch (error) {
    next(error);
  }
}


export const getAlunoByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const numberId = +id;
    const aluno = await getAlunoByIdService(numberId);
    return res.status(200).json(aluno);
  } catch (error) {
    next(error);
  }
}

export const deleteAlunoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const numberId = +id;
    await deleteAlunoService(numberId);
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}