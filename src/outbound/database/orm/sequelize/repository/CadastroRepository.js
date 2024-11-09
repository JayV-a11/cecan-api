import IRepository from "../../../../../core/repository/IRepository.js";
import CadastroModel from "../model/CadastroModel.js";

export default class CadastroRepository extends IRepository {
  constructor() {
    super(CadastroModel.init());
  }

  async save(cadastro) {
    return await this.connection.create({
      nome_paciente: cadastro.nome_paciente,
      status: cadastro.status,
    });
  }

  async update(cadastro) {
    const data = {
      status: cadastro.status,
    };

    return await this.connection.update(data, {
      where: {
        id: cadastro.id,
      },
    });
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }

  async findOne(filter) {
    return await this.connection.findOne(filter);
  }
}
