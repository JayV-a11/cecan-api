import AbstractModel from "./AbstractModel.js";

export default class PacienteModel extends AbstractModel {
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
    id = this.id;
    nome = this.nome;
    rg = this.rg;
    cpf = this.cpf;
    nascimento = this.nascimento;
    sus = this.sus;
    convenio = this.convenio;
    estado_civil = this.estado_civil;
    escolaridade = this.escolaridade;
    contato = this.contato;
    codigo = this.codigo;
  }
}
