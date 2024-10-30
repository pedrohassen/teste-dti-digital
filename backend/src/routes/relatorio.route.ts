import { Router } from "express";
import { getAllDataController } from "../controller/relatorio.controller";

const route = Router();

route.get("/", (req, res, next) => {
  getAllDataController(req, res, next);
});

export default route;