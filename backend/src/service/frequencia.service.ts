import { z } from "zod";
import { newFrequenciaData } from "../utils/types.zod";
import { createFrequenciaModel } from "../model/frequencia.model";

type newFrequenciaDataType = z.infer<typeof newFrequenciaData>

export const createFrequenciaService = async ({ frequencia, alunoId }: newFrequenciaDataType) => {
  try {
    const presenca = await createFrequenciaModel({ frequencia, alunoId });
    return presenca
  } catch (error) {
    throw error;
  }
}