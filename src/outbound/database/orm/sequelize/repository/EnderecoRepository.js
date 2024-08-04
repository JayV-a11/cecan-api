import IEnderecoRepository from "../../../../../core/repository/IEnderecoRepository.js";
import EnderecoModel from "../model/EnderecoModel.js";

export default class EnderecoRepository extends IEnderecoRepository {
  constructor() {
    super(EnderecoModel.init());
  }

  async save(endereco) {
    return await this.connection.create({
        id: endereco.id,
        paciente_id: endereco.paciente_id,
        cep: endereco.cep,
        rua: endereco.rua,
        numero: endereco.numero,
        cidade: endereco.cidade,
        bairro: endereco.bairro,
        estado: endereco.estado,
        complemento: endereco.complemento,
    });
  }

  async findOne(filter) {
    return await this.connection.findOne({ where: filter });
  }

  async findAll(filter) {
    return await this.connection.findAll({ where: filter });
  }
}
