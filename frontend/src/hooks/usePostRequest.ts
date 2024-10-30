import { useState } from 'react';
import axios from 'axios';
import { RelatorioData } from '../interface/interface';

export const createAluno = async (data: { name: string }) => {
  const response = await axios.post('http://localhost:3001/alunos', data);
  return response.data;
};

export const createFrequencia = async (data: { alunoId: number; frequencia: number }) => {
  const response = await axios.post('http://localhost:3001/frequencia', data);
  return response.data;
};

export const createDesempenho = async (data: { alunoId: number; disciplinaId: number; nota: number }) => {
  const response = await axios.post('http://localhost:3001/desempenho', data);
  return response.data;
};

export const useGenerateReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reportData, setReportData] = useState<RelatorioData>();

  const generateReport = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<RelatorioData>('http://localhost:3001/generate-report');
      if (response === undefined) {
        throw new Error('No report data found.');
      } else setReportData(response.data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred while generating the report.';
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, reportData, generateReport };
};

export default useGenerateReport;


