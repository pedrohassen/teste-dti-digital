import { Router } from "express";
import { createFrequenciaController } from "../controller/frequencia.controller";

const route = Router();

route.post("/", (req, res, next) => {
  createFrequenciaController(req, res, next);
});

export default route;