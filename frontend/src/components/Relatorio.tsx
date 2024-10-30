import React, { useEffect, useState } from 'react';
import { useGenerateReport } from '../hooks/usePostRequest';
import { RelatorioData } from '../interface/interface';

const Relatorio: React.FC = () => {
  const { loading, error, reportData, generateReport } = useGenerateReport();
  const [data, setData] = useState<RelatorioData | null>(null);

  useEffect(() => {
    if (reportData) {
      setData({
        alunos: reportData.alunos,
        mediaTurmaPorDisciplina: reportData.mediaTurmaPorDisciplina,
        alunosAcimaMediaTurma: reportData.alunosAcimaMediaTurma,
        alunosBaixaFrequencia: reportData.alunosBaixaFrequencia,
      });
    }
  }, [reportData]);

  const renderList = (title: string, items: string[]) => (
    <div className='flex flex-col items-start justify-start w-1/4 border border-[#256291] rounded-lg p-2'>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className='flex flex-col items-start justify-start'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="flex flex-col items-center justify-start w-2/3 mr-36">
        <input
          type="button"
          value="Gerar Relatório da Turma"
          onClick={generateReport}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-600"
          disabled={loading}
        />
      <div className="border border-gray-300 rounded-lg p-4">
        {loading && <p>Gerando relatório...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <div className="flex space-x-4">
            {renderList('Média das Notas:', data.alunos)}
            <div className='flex flex-col items-start justify-start w-1/4 border border-[#256291] rounded-lg p-2'>
              <h3 className="text-lg font-semibold mb-2">Média por Disciplina:</h3>
              <ul className='flex flex-col'>
                {Object.entries(data.mediaTurmaPorDisciplina).map(([disciplinaId, media]) => (
                  <li key={disciplinaId}>
                    {disciplinaId}: {media.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
            {renderList('Alunos Acima da Média:', data.alunosAcimaMediaTurma)}
            {renderList('Alunos com Baixa Frequência:', data.alunosBaixaFrequencia)}
          </div>
        )}
      </div>
    </section>
  );
};

export default Relatorio;