import IPacienteRepository from "../../../../../core/repository/IPacienteRepository.js";
import PacienteModel from "../model/PacienteModel.js";

export default class PacienteRepository extends IPacienteRepository {
  constructor() {
    super(PacienteModel.init());
  }

  async save(paciente) {
    return await this.connection.create({
        nome: paciente.nome,
        rg: paciente.rg,
        cpf: paciente.cpf,
        nascimento: paciente.nascimento,
        sus: paciente.sus,
        convenio: paciente.convenio,
        estado_civil: paciente.estado_civil,
        escolaridade: paciente.escolaridade,
        outro_contato: paciente.outro_contato,
        parentesco: paciente.parentesco
    });
  }

  async findOne(filter) {
    return await this.connection.findOne(filter);
  }

  async findAll(filter) {
    return await this.connection.findAll(filter)
  }
}
