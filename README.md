
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
- ter o Docker e o Docker Compose instalados em sua máquina.

## Configuração do Docker

### Docker Compose

Na pasta `backend`, você encontrará o arquivo `docker-compose.yml` que configura o MySQL. Para garantir a segurança das suas credenciais, utilize um arquivo `.env`.

### Criar um Arquivo `.env`

Na pasta onde está o seu `docker-compose.yml`, crie um arquivo chamado `.env` e adicione as seguintes variáveis:

```env
MYSQL_USER=seu_usuario  # Substitua pelo nome do usuário desejado
MYSQL_PASSWORD=sua_senha # Substitua pela senha desejada
MYSQL_ROOT_PASSWORD=senha_root # Senha do root
```

### Executar o Docker Compose

Para iniciar o contêiner do MySQL, execute o seguinte comando na pasta `backend`:

```bash
docker-compose up -d
```

Isso fará com que o Docker Compose inicie o contêiner MySQL com as configurações corretas. 

## Configuração do Prisma

Acesse o banco de dados configurado no arquivo `schema.prisma`. Execute o comando abaixo para criar o banco de dados e popular a tabela das disciplinas:

```bash
npm run prisma:migrate  
```

## Configurar as variáveis de ambiente, instalar as dependências e rodar o projeto

1. Edite as variáveis de ambiente de acordo com o arquivo `.env.example` na pasta `backend`;
2. Execute o comando `npm install` dentro da pasta `backend` do projeto;
3. Execute o comando `npm start` dentro da pasta `backend` do projeto;
4. Execute o comando `npm install` dentro da pasta `frontend` do projeto;
5. Execute o comando `npm run dev` dentro da pasta `frontend` do projeto;
6. Abra o navegador e acesse o endereço `http://localhost:5173/`.

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
* A estilização foi feita em Tailwind CSS.

## Considerações Finais

Esse projeto visa melhorar a gestão acadêmica, permitindo que professores e administradores acompanhem o desempenho dos alunos de maneira eficiente. Para futuras implementações, considerações sobre autenticação de usuários e funcionalidades adicionais podem ser exploradas.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.