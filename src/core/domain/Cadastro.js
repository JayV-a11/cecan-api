import AbstractEntity from "./AbstractEntity.js";

export default class Cadastro extends AbstractEntity {
  constructor({
    id = null,
    nome_paciente = "",
    status = "",
  } = {}) {
    super();
    this.id = id;
    this.nome_paciente = nome_paciente;
    this.status = status;
  }
}
