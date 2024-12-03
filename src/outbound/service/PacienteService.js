import IPacienteService from "../../core/service/IPacienteService.js";
import PacienteFilterMapper from "../database/orm/sequelize/filter/mapper/PacienteFilterMapper.js";
import PacienteMapper from "../database/orm/sequelize/model/mapper/PacienteMapper.js";
import PacienteRespository from "../database/orm/sequelize/repository/PacienteRespository.js";

export default class PacienteService extends IPacienteService {
  constructor({ pacienteRespository = null } = {}) {
    super();
    this.createPaciente = this.createPaciente.bind(this);
    this.updatePaciente = this.updatePaciente.bind(this);
    this.findAllPacientes = this.findAllPacientes.bind(this);
    this.removePaciente = this.removePaciente.bind(this);
    this.pacienteRespository = new PacienteRespository();
    this.pacienteMapper = new PacienteMapper();
    this.pacienteFilterMapper = new PacienteFilterMapper();
  }

  async createPaciente(paciente) {
    const pacienteModel = await this.pacienteRespository.save(paciente);
    return this.pacienteMapper.adapt(pacienteModel);
  }

  async updatePaciente(paciente) {
    const pacienteModel = await this.pacienteRespository.update(paciente);
    return this.pacienteMapper.adapt(pacienteModel);
  }

  async findAllPacientes(filter) {
    try {
      const pacienteFilter = this.pacienteFilterMapper.adapt(filter);
      filter = pacienteFilter.mountFilter();
      const pacienteModels = await this.pacienteRespository.findAll(filter);

      const pacientes = [];

      for (const pacienteModel of pacienteModels) {
        pacientes.push(pacienteModel);
      }

      return pacientes;
    } catch (err) {
      console.log(err, "erro");
    }
  }

  async removePaciente(paciente_id) {
    const pacienteModel = await this.pacienteRespository.remove(paciente_id);
    return this.pacienteMapper.adapt(pacienteModel);
  }
}
