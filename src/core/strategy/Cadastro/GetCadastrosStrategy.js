import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class GetCadastrosStrategy extends AbstractStrategy {
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
            const cadastros = await this.cadastroService.findAllCadastros(filter);
            result.data = cadastros;
            result.status = (cadastros.length === 0) ? 204 : 200;
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