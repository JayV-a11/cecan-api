import IEnderecoService from "../../core/service/IEnderecoService.js";
import EnderecoMapper from "../database/orm/sequelize/model/mapper/EnderecoMapper.js";
import EnderecoRepository from "../database/orm/sequelize/repository/EnderecoRepository.js";

export default class PacienteService extends IEnderecoService {
  constructor({ enderecoRepository = null } = {}) {
    super();
    this.createPaciente = this.createPaciente.bind(this);
    this.updatePaciente = this.updatePaciente.bind(this);
    this.findAllPacientes = this.findAllPacientes.bind(this);
    this.enderecoRepository = new EnderecoRepository();
    this.enderecoMapper = new EnderecoMapper();
  }

  async createEndereco(endereco) {
    const enderecoModel = await this.enderecoRepository.save(endereco);
    return this.pacienteMapper.adapt(enderecoModel);
  }
}
