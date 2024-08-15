import AbstractEntity from "./AbstractEntity.js";

export default class QuadroClinico extends AbstractEntity {
  constructor({
    id = null,
    paciente_id = "",
    recidiva = false,
    metastase = false,
    realizou_cirurgia = false,
    realiza_exames_prevencao = false,
    realiza_tratamento_outras_doencas = false,
    local_tratamento = "",
    medico_responsavel = "",
    data_diagnostico = null,
  } = {}) {
    super();
    this.id = id;
    this.paciente_id = paciente_id;
    this.recidiva = recidiva;
    this.metastase = metastase;
    this.realizou_cirurgia = realizou_cirurgia;
    this.realiza_exames_prevencao = realiza_exames_prevencao;
    this.realiza_tratamento_outras_doencas = realiza_tratamento_outras_doencas;
    this.local_tratamento = local_tratamento;
    this.medico_responsavel = medico_responsavel;
    this.data_diagnostico = data_diagnostico;
  }
}
