import express from "express";
import CadastrosController from "../controller/CadastrosController.js";

const router = express.Router();

const middleware = (req, res, next) => {
  next();
};

router.use(middleware);

router.get("/cadastro/:id", new CadastrosController().getOneCadastro);

export default router;
