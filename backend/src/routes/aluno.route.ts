import { Router } from "express";
import { createAlunoController, deleteAlunoController, getAlunoByIdController, getAlunosController } from "../controller/aluno.controller";

const route = Router();

route.post("/", (req, res, next) => {
  createAlunoController(req, res, next);
});
route.get("/", (req, res, next) => {
  getAlunosController(req, res, next);
});
route.get("/:id", (req, res, next) => {
  getAlunoByIdController(req, res, next);
});
route.delete("/:id", (req, res, next) => {
  deleteAlunoController(req, res, next);
});

export default route;