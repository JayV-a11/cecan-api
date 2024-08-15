import ISitSocieconomicaRepository from "../../../../../core/repository/ISitSocieconomicaRepository.js";
import SitSocieconomicaModel from "../model/SitSocieconomicaModel.js";

export default class SitSocieconomicaRepository extends ISitSocieconomicaRepository {
  constructor() {
    super(SitSocieconomicaModel.init());
  }

  async save(sitSocieconomica) {
    return await this.connection.create({
        id: sitSocieconomica.id,
        paciente_id: sitSocieconomica.paciente_id,
        recebe_beneficio: sitSocieconomica.recebe_beneficio,
        aposentado: sitSocieconomica.aposentado,
        desempregado: sitSocieconomica.desempregado,
        moradia: sitSocieconomica.moradia,
        apoio: sitSocieconomica.apoio,
        renda_per_capita: sitSocieconomica.renda_per_capita,
    });
  }

  async findOne(filter) {
    return await this.connection.findOne({ where: filter });
  }

  async findAll(filter) {
    return await this.connection.findAll({ where: filter });
  }
}
