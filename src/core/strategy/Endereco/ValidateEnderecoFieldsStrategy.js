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

    async execute(address, result = this.result) {
        if (!(address instanceof Endereco)) {
            result.error.push('Entidade recebida não é um endereço!');
        }

        if (!address || !address.paciente_id || address.paciente_id.length === 0) {
            result.error.push('O campo "paciente_id" é obrigatório!');
        }
        if (!address.cep || address.cep.length === 0) {
            result.error.push('O campo "cep" é obrigatório!');
        }
        if (!address.numero || address.numero.length === 0) {
            result.error.push('O campo "numero" é obrigatório!');
        }
        if (!address.cidade || address.cidade.length === 0) {
            result.error.push('O campo "cidade" é obrigatório!');
        }
        if (!address.bairro || address.bairro.length === 0) {
            result.error.push('O campo "bairro" é obrigatório!');
        }
        if (!address.estado || address.estado.length === 0) {
            result.error.push('O campo "estado" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: address,
            result
        };
    }
}
