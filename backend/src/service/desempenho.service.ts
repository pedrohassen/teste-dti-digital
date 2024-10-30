import { z } from "zod";
import { newDesempenhoData } from "../utils/types.zod";
import { createDesempenhoModel } from "../model/desempenho.model";

type newDesempenhoDataType = z.infer<typeof newDesempenhoData>;

export const createDesempenhoService = async ({ disciplinaId, nota, alunoId }: newDesempenhoDataType) => {
  try {
    const desempenho = await createDesempenhoModel({ disciplinaId, nota, alunoId });
    return desempenho
  } catch (error) {
    throw error;
  }
}
