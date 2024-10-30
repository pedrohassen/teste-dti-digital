export interface Aluno {
  id: number;
  name: string;
  desempenhos: Desempenho[];
  frequencia: Frequencia | null;
}

export interface Frequencia {
  alunoId: number;
  frequencia: number;
}

export interface Desempenho {
  alunoId: number;
  disciplinaId: number;
  nota: number;
}

export interface FullData {
  aluno: Aluno[];
  frequencia: Frequencia[];
  desempenho: Desempenho[];
}
