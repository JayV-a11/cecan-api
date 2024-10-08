import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';
import Endereco from '../../domain/Endereco.js';
import EnderecoService from '../../../outbound/service/EnderecoService.js';

export default class SaveEnderecoStrategy extends AbstractStrategy {
    constructor ({
        enderecoService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.enderecoService = new EnderecoService();
    }

    async execute(entity, result = this.result) {
        try {
            const endereco = new Endereco(entity.endereco);
            const res = await this.enderecoService.createEndereco(endereco);
            result.status = 201;
            result.data = res;
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity,
            result
        };
    }
}