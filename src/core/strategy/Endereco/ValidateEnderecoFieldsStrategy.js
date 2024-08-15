import AbstractStrategy from '../AbstractStrategy.js';
import Endereco from '../../domain/Endereco.js';
import Result from '../../util/Result.js';

export default class ValidateEnderecoFieldsStrategy extends AbstractStrategy {
    constructor({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(entity, result = this.result) {
        const endereco = entity.endereco;

        if (!endereco || !endereco.paciente_id || endereco.paciente_id.length === 0) {
            result.error.push('O campo "paciente_id" é obrigatório!');
        }
        if (!endereco.cep || endereco.cep.length === 0) {
            result.error.push('O campo "cep" é obrigatório!');
        }
        if (!endereco.numero || endereco.numero.length === 0) {
            result.error.push('O campo "numero" é obrigatório!');
        }
        if (!endereco.cidade || endereco.cidade.length === 0) {
            result.error.push('O campo "cidade" é obrigatório!');
        }
        if (!endereco.bairro || endereco.bairro.length === 0) {
            result.error.push('O campo "bairro" é obrigatório!');
        }
        if (!endereco.estado || endereco.estado.length === 0) {
            result.error.push('O campo "estado" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity,
            result
        };
    }
}
