import { Router } from "express";
import { createDesempenhoController } from "../controller/desempenho.controller";

const route = Router();

route.post("/", (req, res, next) => {
  createDesempenhoController(req, res, next);
});

export default route;