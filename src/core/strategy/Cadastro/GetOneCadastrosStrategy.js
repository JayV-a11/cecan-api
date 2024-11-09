import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class GetOneCadastrosStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        cadastroService = null
    } = {}) {
        super();
        this.result = result;
        this.cadastroService = cadastroService;
    }

    async execute(filter, result = this.result) {
        try {
            const cadastro = await this.cadastroService.findOneCadastro(filter);
            result.data = cadastro;
            result.status = (cadastro.length === 0) ? 204 : 200;
        } catch(error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: filter,
            result
        }
    }
}