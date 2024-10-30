import { z } from "zod";

export const newAlunoData = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
});

export const newDesempenhoData = z.object({
  nota: z.number().min(0, 'A nota deve ser maior ou igual a 0').max(10, 'A nota deve ser menor ou igual a 10'),
  disciplinaId: z.number().min(1),
  alunoId: z.number().min(1),
});

export const newFrequenciaData = z.object({
  frequencia: z.number().min(0, 'A frequência deve ser maior ou igual a 0').max(100, 'A frequência deve ser menor ou igual a 100'),
  alunoId: z.number().min(1),
})