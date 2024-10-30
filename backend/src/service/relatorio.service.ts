import { getAllDataModel } from "../model/relatorio.model";

export const getAllDataService = async () => {
  try {
    const { aluno, frequencia, desempenho } = await getAllDataModel();

    const alunosComMedia = aluno.map((a) => {
      const notas = desempenho.filter((d) => d.alunoId === a.id);
      const mediaNotas = notas.length > 0
        ? notas.reduce((acc, d) => acc + d.nota, 0) / notas.length
        : 0;
      const freq = frequencia.find((f) => f.alunoId === a.id);
      const frequenciaGeral = freq ? freq.frequencia : 0;

      return {
        id: a.id,
        nome: a.name,
        mediaNotas,
        frequencia: frequenciaGeral,
      };
    });

    const mediaTurmaPorDisciplina: { [key: number]: number } = {};
    const totalPorDisciplina: { [key: number]: { totalNotas: number; count: number } } = {};

    desempenho.forEach((d) => {
      if (!totalPorDisciplina[d.disciplinaId]) {
        totalPorDisciplina[d.disciplinaId] = { totalNotas: 0, count: 0 };
      }
      totalPorDisciplina[d.disciplinaId].totalNotas += d.nota;
      totalPorDisciplina[d.disciplinaId].count += 1;
    });

    for (const [disciplinaId, { totalNotas, count }] of Object.entries(totalPorDisciplina)) {
      mediaTurmaPorDisciplina[+disciplinaId] = totalNotas / count;
    }

    const mediaGeralDaTurma = Object.values(mediaTurmaPorDisciplina).reduce((acc, val) => acc + val, 0) / Object.keys(mediaTurmaPorDisciplina).length;

    const mediaDeCadaAluno = alunosComMedia.map((a) => {
      const notas = desempenho.filter((d) => d.alunoId === a.id);
      const media = notas.length > 0
        ? notas.reduce((acc, d) => acc + d.nota, 0) / notas.length
        : 0;
      return {
        id: a.id,
        nome: a.nome,
        mediaNotas: media,
      };
    })

    const alunosAcimaMediaTurma = mediaDeCadaAluno
      .filter((a) => a.mediaNotas > mediaGeralDaTurma)
      .map((a) => `Nome: ${a.nome} - Média: ${a.mediaNotas.toFixed(2)}`);

    const alunosBaixaFrequencia = alunosComMedia
      .filter((a) => a.frequencia < 75)
      .map((a) => `Nome: ${a.nome} - Frequência: ${a.frequencia.toFixed(2)}%`);

    const disciplinas = {
      1: "Português",
      2: "Matemática",
      3: "História",
      4: "Geografia",
      5: "Ciências",
    };


    const saida = {
      alunos: alunosComMedia.map(a => `Nome: ${a.nome} - Média: ${a.mediaNotas.toFixed(2)} - Frequência: ${a.frequencia.toFixed(2)}%`),
      mediaTurmaPorDisciplina: Object.fromEntries(
        Object.entries(mediaTurmaPorDisciplina).map(([id, media]) => [disciplinas[id], media])
      ),
      alunosAcimaMediaTurma,
      alunosBaixaFrequencia,
    };

    return saida;
  } catch (error) {
    throw error;
  }
}