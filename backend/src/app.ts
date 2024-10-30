import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { alunoRoute, desempenhoRoute, frequenciaRoute, relatorioRoute } from "./routes";
import { errorHandler } from "./middlewares/error.handler";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.send({
        message: "Hello World!",
    });
});

app.use("/alunos", alunoRoute);
app.use("/desempenho", desempenhoRoute);
app.use("/frequencia", frequenciaRoute);
app.use("/generate-report", relatorioRoute);

app.use(errorHandler);

export default app;
