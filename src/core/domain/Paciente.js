import AbstractEntity from "./AbstractEntity.js";

export default class Paciente extends AbstractEntity {
  constructor({
    id = null,
    nome = "",
    rg = "",
    cpf = "",
    nascimento = "",
    sus = "",
    convenio = false,
    estado_civil = "",
    escolaridade = "",
    contato = "",
    codigo = null,
  } = {}) {
    super();
    this.id = id;
    this.nome = nome;
    this.rg = rg;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.sus = sus;
    this.convenio = convenio;
    this.estado_civil = estado_civil;
    this.escolaridade = escolaridade;
    this.contato = contato;
    this.codigo = codigo;
  }
}
