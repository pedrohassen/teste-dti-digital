import { z } from "zod";
import { newFrequenciaData } from "../utils/types.zod";
import { createFrequenciaModel } from "../model/frequencia.model";

type newFrequenciaDataType = z.infer<typeof newFrequenciaData>;

export const createFrequenciaService = async ({ frequencia, alunoId }: newFrequenciaDataType) => {
  const parsedData = newFrequenciaData.safeParse({ frequencia, alunoId });
  if (!parsedData.success) {
    throw new Error("Erro de validação na service: " + JSON.stringify(parsedData.error.format()));
  }

  try {
    const presenca = await createFrequenciaModel(parsedData.data);
    return presenca;
  } catch (error) {
    throw error;
  }
};
