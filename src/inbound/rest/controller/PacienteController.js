import AbstractController from "./AbstractController.js";

import pacienteMapper from "../model/mapper/PacienteMapper.js";
import CreatePacienteUseCase from "../../../core/useCase/Paciente/CreatePacienteUseCase.js";
import PacienteService from "../../../outbound/service/PacienteService.js";

export default class PacienteController extends AbstractController {
  constructor() {
    super();
    this.createPaciente = this.createPaciente.bind(this);
    this.pacienteService = new PacienteService();
    this.pacienteMapper = new pacienteMapper();

    //USE CASES
    this.createPacienteUseCase = new CreatePacienteUseCase({
      pacienteService: this.pacienteService,
    });
  }

  async createPaciente(req, res, next) {
    const paciente = req.body;
    const result = await this.createPacienteUseCase.createPaciente(paciente);
    const formattedResponseData = [];

    formattedResponseData.push(this.pacienteMapper.adapt(result.data.dataValues));

    result.data = formattedResponseData;
    res.status(result.status);
    res.send(result);
  }
}
