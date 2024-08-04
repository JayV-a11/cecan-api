import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class SaveEnderecoStrategy extends AbstractStrategy {
    constructor ({
        enderecoService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.enderecoService = enderecoService;
    }

    async execute(endereco, result = this.result) {
        try {
            endereco = await this.enderecoService.createEndereco(endereco);
            result.status = 201;
            result.data = [endereco];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: endereco,
            result
        };
    }
}