import express from "express";
import CadastrosController from "../controller/CadastrosController.js";
import PacienteController from "../controller/PacienteController.js";

const router = express.Router();

const middleware = (req, res, next) => {
  next();
};

router.use(middleware);

router.post("/paciente", new PacienteController().createPaciente);
router.post("/cadastro", new CadastrosController().createCadastro);
router.get("/cadastro/:id", new CadastrosController().getOneCadastro);

export default router;
