import AbstractController from "./AbstractController.js";
import PacienteMapper from "../model/mapper/PacienteMapper.js";
import PacienteService from "../../../outbound/service/PacienteService.js";
import GenerateXLSXFromDataUseCase from "../../../core/useCase/Paciente/GenerateXLSXFromDataUseCase.js";
import stream from "stream";

export default class XlsxController extends AbstractController {
  constructor() {
    super();
    this.generateXLSX = this.generateXLSX.bind(this);
    this.pacienteService = new PacienteService();
    this.pacienteMapper = new PacienteMapper();
    this.generateXLSXFromDataUseCase = new GenerateXLSXFromDataUseCase({
      pacienteService: this.pacienteService,
    });
  }


  async generateXLSX(req, res, next) {
    const paciente = req.query;
    const teste = await this.generateXLSXFromDataUseCase.generate(paciente);
    const workbook = teste.data;
    var fileName = 'pacientes.xlsx';
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
    workbook.xlsx.write(res).then(() => res.end());
  }
}
