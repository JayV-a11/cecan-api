import AbstractEntity from "./AbstractEntity.js";

export default class Endereco extends AbstractEntity {
  constructor({
    id = null,
    paciente_id = null,
    cep = "",
    rua = "",
    numero = "",
    cidade = "",
    bairro = "",
    estado = "",
    complemento = "",
  } = {}) {
    super();
    this.id = id;
    this.paciente_id = paciente_id;
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.bairro = bairro;
    this.estado = estado;
    this.complemento = complemento;
  }
}
