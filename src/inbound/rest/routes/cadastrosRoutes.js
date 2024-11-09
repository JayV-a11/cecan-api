import express from "express";
import CadastrosController from "../controller/CadastrosController.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();
const middleware = (req, res, next) => {
  ensureAuthenticated(req, res, next);
};

router.use(middleware);

router.post("/cadastro", new CadastrosController().createCadastro);
router.patch("/cadastro", new CadastrosController().updateCadastroStatus);
router.get("/cadastro/all", new CadastrosController().getCadastros);

export default router;