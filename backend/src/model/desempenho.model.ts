import { z } from "zod";
import { prisma } from "../utils/prisma.client";
import { newDesempenhoData } from "../utils/types.zod";
import { FullData } from "../interface/interface";

type newDesempenhoDataType = z.infer<typeof newDesempenhoData>;

export const createDesempenhoModel = async ({ nota, disciplinaId, alunoId }: newDesempenhoDataType) => {
  try {
    const alunoExists = await prisma.aluno.findUnique({
      where: { id: alunoId },
    });

    if (!alunoExists) {
      throw new Error("Aluno not found with the provided ID.");
    }

    const disciplinaExists = await prisma.disciplina.findUnique({
      where: { id: disciplinaId },
    });

    if (!disciplinaExists) {
      throw new Error("Disciplina not found with the provided ID.");
    }

    const desempenho = await prisma.desempenho.create({
      data: {
        alunoId,
        disciplinaId,
        nota,
      },
    });
    return desempenho;
  } catch (error) {
    throw error;
  }
};
