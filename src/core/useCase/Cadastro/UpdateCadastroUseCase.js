import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import UpdateCadastroStrategy from '../../strategy/Cadastro/UpdateCadastroStrategy.js';
import GetCadastrosStrategy from '../../strategy/Cadastro/GetCadastrosStrategy.js';

export default class UpdateCadastroUseCase extends AbstractUseCase {
    constructor({
        cadastroService = null
    } = {}) {
        super();
        this.cadastroService = cadastroService;
        this.strategies = [
            new UpdateCadastroStrategy({
                cadastroService: this.cadastroService
            }),
            new GetCadastrosStrategy({
                cadastroService: this.cadastroService
            }),
        ]
    }

    async updateCadastro(cadastro) {
        return await this.executeStrategies(cadastro, new Result());
    }
}