import IPacienteService from "../../core/service/IPacienteService.js";
import PacienteFilterMapper from "../database/orm/sequelize/filter/mapper/PacienteFilterMapper.js";
import AuthFilterMapper from "../database/orm/sequelize/filter/mapper/AuthFilterMapper.js";
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
    const userFilter = this.pacienteFilterMapper.adapt(filter);
    filter = userFilter.mountFilter();

    const userModels = await this.pacienteRespository.findAll(filter);

    const users = [];

    for (const userModel of userModels) {
      users.push(this.pacienteMapper.adapt(userModel));
    }

    return users;
  }
}
