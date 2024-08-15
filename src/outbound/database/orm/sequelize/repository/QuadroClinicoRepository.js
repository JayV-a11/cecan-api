import IQuadroClinicoRepository from "../../../../../core/repository/IQuadroClinicoRepository.js";
import QuadroClinicoModel from "../model/QuadroClinicoModel.js";

export default class QuadroClinicoRepository extends IQuadroClinicoRepository {
  constructor() {
    super(QuadroClinicoModel.init());
  }

  async save(quadroClinico) {
    return await this.connection.create({
        id: quadroClinico.id,
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
  }

  async findOne(filter) {
    return await this.connection.findOne({ where: filter });
  }

  async findAll(filter) {
    return await this.connection.findAll({ where: filter });
  }
}
