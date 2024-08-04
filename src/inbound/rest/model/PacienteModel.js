import AbstractModel from './AbstractModel.js';

export default class PacienteModel extends AbstractModel {
    constructor ({
        id = null,
        rg = '',
        cpf = '',
        nascimento = '',
        sus = '',
        convenio = '',
        estado_civil = '',
        escolaridade = '',
        outro_contato = '',
        parentesco = '',
    } = {}) {
        super();
        this.id = id;
        this.rg = rg;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.sus = sus;
        this.convenio = convenio;
        this.estado_civil = estado_civil;
        this.escolaridade = escolaridade;
        this.outro_contato = outro_contato;
        this.parentesco = parentesco;
    }

}