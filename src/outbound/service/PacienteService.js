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
    this.pacienteRespository = new PacienteRespository();
    this.pacienteMapper = new PacienteMapper();
    this.pacienteFilterMapper = new PacienteFilterMapper();
  }

  async createPaciente(user) {
    const userModel = await this.pacienteRespository.save(user);
    return this.pacienteMapper.adapt(userModel);
  }

  async updatePaciente(user) {
    const userModel = await this.pacienteRespository.update(user);
    return this.pacienteMapper.adapt(userModel);
  }

  async findAllPacientes(filter) {
    try {
      const pacienteFilter = this.pacienteFilterMapper.adapt(filter);
      filter = pacienteFilter.mountFilter();
      const userModels = await this.pacienteRespository.findAll(filter);

      const pacientes = [];

      for (const userModel of userModels) {
        pacientes.push(userModel);
      }

      return pacientes;
    } catch (err) {
      console.log(err, "erro");
    }
  }
}
