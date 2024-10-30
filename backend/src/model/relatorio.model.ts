import { FullData } from "../interface/interface";
import { prisma } from "../utils/prisma.client";

export const getAllDataModel = async (): Promise<FullData> => {
  try {
    const aluno = await prisma.aluno.findMany({
      include: {
        desempenhos: true,
        frequencia: true,
      },
    });

    const frequencia = await prisma.frequencia.findMany();
    const desempenho = await prisma.desempenho.findMany();

    return { aluno, frequencia, desempenho };
  } catch (error) {
    throw error;
  }
}