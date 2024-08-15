import IQuadroClinicoService from "../../core/service/IQuadroClinicoService.js";
import QuadroClinicoMapper from "../database/orm/sequelize/model/mapper/QuadroClinicoMapper.js";
import QuadroClinicoRepository from "../database/orm/sequelize/repository/QuadroClinicoRepository.js";

export default class QuadroClinicoService extends IQuadroClinicoService {
  constructor({ quadroClinicoRepository = null } = {}) {
    super();
    this.createQuadroClinico = this.createQuadroClinico.bind(this);
    this.quadroClinicoRepository = new QuadroClinicoRepository();
    this.quadroClinicoMapper = new QuadroClinicoMapper();
  }

  async createQuadroClinico(quadroClinico) {
    const quadroClinicoModel = await this.quadroClinicoRepository.save({
      paciente_id: quadroClinico.paciente_id,
      recidiva: quadroClinico.recidiva,
      metastase: quadroClinico.metastase,
      realizou_cirurgia: quadroClinico.realizou_cirurgia,
      realiza_exames_prevencao: quadroClinico.realiza_exames_prevencao,
      realiza_tratamento_outras_doencas: quadroClinico.realiza_tratamento_outras_doencas,
      local_tratamento: quadroClinico.local_tratamento,
      medico_responsavel: quadroClinico.medico_responsavel,
      data_diagnostico: quadroClinico.data_diagnostico,
    });
    return this.quadroClinicoMapper.adapt(quadroClinicoModel);
  }
}
