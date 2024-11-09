import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class UpdateCadastroStrategy extends AbstractStrategy {
    constructor ({
        cadastroService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.cadastroService = cadastroService;
    }

    async execute(cadastro, result = this.result) {
        try {
            cadastro = await this.cadastroService.updateCadastro(cadastro);
            result.status = 200;
            result.data = [cadastro];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: cadastro,
            result
        };
    }
}