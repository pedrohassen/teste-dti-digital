import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Verifica e insere as disciplinas apenas se a tabela estiver vazia
  const existingDisciplinas = await prisma.disciplina.findMany();
  
  if (existingDisciplinas.length === 0) {
    const disciplinas = [
      { name: "Português" },
      { name: "Matemática" },
      { name: "Ciências" },
      { name: "História" },
      { name: "Geografia" }
    ];

    await prisma.disciplina.createMany({
      data: disciplinas
    });

    console.log('Disciplinas inseridas com sucesso!');
  } else {
    console.log('Disciplinas já existem na tabela.');
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
