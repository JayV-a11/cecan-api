import AbstractModel from "./AbstractModel.js";

export default class UserModel extends AbstractModel {
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
    outro_contato = "",
    parentesco = "",
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
    outro_contato = this.outro_contato;
    parentesco = this.parentesco;
  }
}
