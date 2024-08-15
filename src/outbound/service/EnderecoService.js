import IEnderecoService from "../../core/service/IEnderecoService.js";
import EnderecoMapper from "../database/orm/sequelize/model/mapper/EnderecoMapper.js";
import EnderecoRepository from "../database/orm/sequelize/repository/EnderecoRepository.js";

export default class EnderecoService extends IEnderecoService {
  constructor({ enderecoRepository = null } = {}) {
    super();
    this.createEndereco = this.createEndereco.bind(this);
    this.enderecoRepository = new EnderecoRepository();
    this.enderecoMapper = new EnderecoMapper();
  }

  async createEndereco(endereco) {
    const enderecoModel = await this.enderecoRepository.save(endereco);
    return this.enderecoMapper.adapt(enderecoModel);
  }
}
