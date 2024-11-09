import AbstractModel from './AbstractModel.js';

export default class CadastroModel extends AbstractModel {
    constructor ({
        id = null,
        nome_paciente = '',
        status = '',
    } = {}) {
        super();
        this.id = id;
        this.nome_paciente = nome_paciente,
        this.status = status;
    }
}