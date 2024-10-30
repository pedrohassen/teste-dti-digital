export interface Aluno {
  nome: string;
  mediaNotas: number;
  frequencia: number;
}

export interface MediaTurma {
  [disciplina: string]: number;
}

export interface Relatorio {
  alunos: Aluno[];
  mediaTurma: MediaTurma;
  alunosAcimaMedia: Aluno[];
  alunosFrequenciaBaixa: Aluno[];
}

export interface RelatorioData {
  alunos: Aluno[];
  mediaTurmaPorDisciplina: { [disciplinaId: string]: number };
  alunosAcimaMediaTurma: Aluno[];
  alunosBaixaFrequencia: Aluno[];
};



export interface RelatorioItem {
  alunoId: number;
  nome: string;
  media: number;
}
