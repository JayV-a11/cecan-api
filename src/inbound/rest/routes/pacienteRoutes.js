import express from "express";
import PacienteController from "../controller/PacienteController.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();
const middleware = (req, res, next) => {
  next();
};

router.use(middleware);

router.post("/paciente", new PacienteController().createPaciente);


export default router;
