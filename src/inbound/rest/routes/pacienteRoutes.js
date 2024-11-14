import express from "express";
import PacienteController from "../controller/PacienteController.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();
const middleware = (req, res, next) => {
  ensureAuthenticated(req, res, next);
};

router.use(middleware);

router.get("/paciente", new PacienteController().getPacientes);

export default router;