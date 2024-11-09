import AbstractController from "./AbstractController.js";

import PacienteMapper from "../model/mapper/PacienteMapper.js";
import CreatePacienteUseCase from "../../../core/useCase/Paciente/CreatePacienteUseCase.js";
import PacienteService from "../../../outbound/service/PacienteService.js";
import GetPacientesUseCase from "../../../core/useCase/Paciente/GetPacientesUseCase.js";

export default class PacienteController extends AbstractController {
  constructor() {
    super();
    this.createPaciente = this.createPaciente.bind(this);
    this.getPacientes = this.getPacientes.bind(this);
    this.pacienteService = new PacienteService();
    this.pacienteMapper = new PacienteMapper();

    this.createPacienteUseCase = new CreatePacienteUseCase({
      pacienteService: this.pacienteService,
    });
    this.getPacientesUseCase = new GetPacientesUseCase({
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

  async getPacientes(req, res, next) {
    const paciente = req.query;
    const result = await this.getPacientesUseCase.getPacientes(paciente);
    const formattedResponseData = [];

    formattedResponseData.push(result.data);

    result.data = formattedResponseData;
    res.status(result.status);
    res.send(result.data[0]);
  }
}
