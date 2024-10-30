import { z } from "zod";
import { newAlunoData } from "../utils/types.zod";
import { createAlunoModel, deleteAlunoModel, getAlunoByIdModel, getAlunosModel } from "../model/aluno.model";

type newAlunoDataType = z.infer<typeof newAlunoData>;


export const createAlunoService = async ({ name }: newAlunoDataType) => {
  const aluno = await createAlunoModel({ name })
  return aluno
}

export const getAlunosService = async () => {
  const alunos = await getAlunosModel();
  return alunos || [];
};

export const getAlunoByIdService = async (id: number) => {
  const aluno = await getAlunoByIdModel(id);
  return aluno;
}

export const deleteAlunoService = async (id: number) => {
  await deleteAlunoModel(id);
}