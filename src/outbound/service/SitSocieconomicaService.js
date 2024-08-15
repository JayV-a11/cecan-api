import ISitSocieconomicaService from "../../core/service/ISitSocieconomicaService.js";
import SitSocieconomicaMapper from "../database/orm/sequelize/model/mapper/SitSocieconomicaMapper.js";
import SitSocieconomicaRepository from "../database/orm/sequelize/repository/SitSocieconomicaRepository.js";

export default class SitSocieconomicaService extends ISitSocieconomicaService {
  constructor({
    sitSocieconomicaRepository = new SitSocieconomicaRepository(),
  } = {}) {
    super();
    this.createSitSocieconomica = this.createSitSocieconomica.bind(this);
    this.sitSocieconomicaRepository = sitSocieconomicaRepository;
    this.sitSocieconomicaMapper = new SitSocieconomicaMapper();
  }

async createSitSocieconomica(sitSocieconomica) {
    const sitSocieconomicaModel = await this.sitSocieconomicaRepository.save({
      paciente_id: sitSocieconomica.paciente_id,
      recebe_beneficio: sitSocieconomica.recebe_beneficio,
      aposentado: sitSocieconomica.aposentado,
      desempregado: sitSocieconomica.desempregado,
      moradia: sitSocieconomica.moradia,
      apoio: sitSocieconomica.apoio,
      renda_per_capita: sitSocieconomica.renda_per_capita,
    });
    return this.sitSocieconomicaMapper.adapt(sitSocieconomicaModel);
  }
}
