import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createAluno, createDesempenho, createFrequencia } from '../hooks/usePostRequest';
import { toast } from 'sonner';
import Relatorio from './Relatorio';

interface FormData {
  name: string;
  frequencia: number;
  notas: {
    portugues: number;
    matematica: number;
    historia: number;
    geografia: number;
    ciencias: number;
  };
}

const Main: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const alunoData = await createAluno({ name: data.name });
      const alunoId = alunoData.id;

      await createFrequencia({ alunoId, frequencia: +data.frequencia });

      const disciplinas = [
        { disciplinaId: 1, nota: +data.notas.portugues },
        { disciplinaId: 2, nota: +data.notas.matematica },
        { disciplinaId: 3, nota: +data.notas.historia },
        { disciplinaId: 4, nota: +data.notas.geografia },
        { disciplinaId: 5, nota: +data.notas.ciencias },
      ];

      await Promise.all(
        disciplinas.map(({ disciplinaId, nota }) =>
          createDesempenho({ alunoId, disciplinaId, nota })
        )
      );

      toast.success('Cadastrado com sucesso!', {
        duration: 4000,
        style: {
          borderRadius: '10px',
          background: '#2563EB',
          color: '#fff',
        },
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred while submitting the data.';
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex gap-10 mt-10 w-full">
      <section className="flex flex-col items-start w-1/3 ml-36">
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Insira os dados dos seus alunos abaixo:</h2>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Nome do Aluno */}
          <div className="flex flex-col mb-4 gap-2 items-start">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              {...register('name')}
              placeholder="Nome do Aluno"
              required
              className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Frequência */}
          <div className="flex flex-col mb-4 gap-2 items-start">
            <label htmlFor="frequencia">Frequência (%):</label>
            <input
              type="number"
              id="frequencia"
              {...register('frequencia')}
              placeholder="Entre 0 e 100"
              required
              className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500 w-40"
            />
          </div>

          <h3 className="flex justify-start text-2xl my-5">Disciplinas:</h3>

          {/* Disciplina: Português */}
          <div className="flex flex-col gap-5 mb-4">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="nota-portugues">Nota - Português:</label>
              <input
                type="number"
                id="nota-portugues"
                {...register('notas.portugues')}
                placeholder="Entre 0 e 10"
                required
                className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500 w-36"
              />
            </div>

            {/* Disciplina: Matemática */}
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="nota-matematica">Nota - Matemática:</label>
              <input
                type="number"
                id="nota-matematica"
                {...register('notas.matematica')}
                placeholder="Entre 0 e 10"
                required
                className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500 w-36"
              />
            </div>

            {/* Disciplina: História */}
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="nota-historia">Nota - História:</label>
              <input
                type="number"
                id="nota-historia"
                {...register('notas.historia')}
                placeholder="Entre 0 e 10"
                required
                className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500 w-36"
              />
            </div>

            {/* Disciplina: Geografia */}
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="nota-geografia">Nota - Geografia:</label>
              <input
                type="number"
                id="nota-geografia"
                {...register('notas.geografia')}
                placeholder="Entre 0 e 10"
                required
                className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500 w-36"
              />
            </div>

            {/* Disciplina: Ciências */}
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="nota-ciencias">Nota - Ciências:</label>
              <input
                type="number"
                id="nota-ciencias"
                {...register('notas.ciencias')}
                placeholder="Entre 0 e 10"
                required
                className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-blue-500 w-36"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-blue-600"
          >
            {loading ? 'Cadastrando...' : 'Cadastrar Aluno'}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </section>
      <Relatorio />
    </main>
  );
};

export default Main;