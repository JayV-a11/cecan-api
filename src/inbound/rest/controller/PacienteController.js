import AbstractController from "./AbstractController.js";

import PacienteModel from "../model/PacienteModel.js";

import pacienteMapper from "../model/mapper/PacienteMapper.js";
import CreatePacienteUseCase from "../../../core/useCase/Paciente/CreatePacienteUseCase.js";
import PacienteService from "../../../outbound/service/PacienteService.js";

export default class StockController extends AbstractController {
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
    const pacienteModel = new PacienteModel(req.body);

    const paciente = this.pacienteMapper.adapt(pacienteModel);
    const result = await this.createPacienteUseCase.createPaciente(paciente);
    const formattedResponseData = [];

    for (const data of result.data) {
      formattedResponseData.push(this.pacienteMapper.adapt(data));
    }

    result.data = formattedResponseData;
    res.status(result.status);
    res.send(result);
  }
}
