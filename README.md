# teste-dti-digital

Este projeto é referente a um teste fullstack para uma vaga de estágio na DTI Digital.

**Basicamente é um registro de alunos, suas notas e frequências, assim como a geração de um relatório, onde o sistema calcula:**
- a média das notas de cada aluno
- a média da turma em cada disciplina
- a frequência geral de cada aluno

**Além disso, o relatório mostra:**
- uma lista dos alunos que têm uma média de notas acima da média da turma
- uma lista dos alunos que têm uma frequência abaixo de 75%.

## Instruções para executar o sistema

**Primeiro clone o repositório do projeto:**

- use o comando `git clone https://github.com/pedrohassen/teste-dti-digital.git` usando o método HTTPS.
ou
- use o comando `git clone git@github.com:pedrohassen/teste-dti-digital.git` usando o método SSH.

**Para executar o sistema, você precisará:**

- ter o Node.js instalado em sua máquina;
- ter o MySQL instalado em sua máquina;

**Configuração do Prisma**
   - Acesse o banco de dados configurado no arquivo `schema.prisma`.
   - Execute o comando abaixo para criar o banco de dados e popular a tabela das disciplinas:

     ```bash
     npm run prisma:migrate  
     ```

**Configurar as variáveis de ambiente, instalar as dependências e rodar o projeto**
1. editar as variáveis de ambiente, de acordo, guiando-se pelo arquivo `.env.example` na `pasta backend`;
1. executar o comando `npm install` dentro da `pasta backend` do projeto;
2. executar o comando `npm start` dentro da `pasta backend` do projeto;
3. executar o comando `npm install` dentro da `pasta frontend` do projeto;
4. executar o comando `npm run dev` dentro da `pasta frontend` do projeto;
5. abrir o navegador e acessar o endereço `http://localhost:5173/`.

**Assim, o sistema estará pronto para ser usado.**

## Premissas Assumidas

* O usuário tem conhecimento básico de programação em JavaScript;
* O usuário tem conhecimento básico de React;
* O usuário tem conhecimento básico de Express;
* O usuário tem conhecimento básico de TypeScript;
* O usuário tem conhecimento básico de Prisma;
* O usuário tem conhecimento básico de Tailwind CSS.

## Decisões de Projeto

* O frontend foi feito em React com TypeScript;
* O backend foi feito em Express com TypeScript;
* O banco de dados foi feito em Prisma com MySQL;
* A estilação foi feita em Tailwind CSS.

## Considerações Finais

Esse projeto visa melhorar a gestão acadêmica, permitindo que professores e administradores acompanhem o desempenho dos alunos de maneira eficiente. Para futuras implementações, considerações sobre autenticação de usuários e funcionalidades adicionais podem ser exploradas.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
