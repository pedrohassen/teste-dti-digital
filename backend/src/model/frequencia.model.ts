import { z } from "zod";
import { prisma } from "../utils/prisma.client";
import { newFrequenciaData } from "../utils/types.zod";

type newFrequenciaDataType = z.infer<typeof newFrequenciaData>

export const createFrequenciaModel = async ({ alunoId, frequencia }: newFrequenciaDataType) => {
  try {
    const alunoExists = await prisma.aluno.findUnique({
      where: { id: alunoId },
    });

    if (!alunoExists) {
      throw new Error("Aluno not found with the provided ID.");
    }

    const presenca = await prisma.frequencia.create({
      data: {
        alunoId,
        frequencia,
      },
    });
    return presenca;
  } catch (error) {
    throw error;
  }
};
