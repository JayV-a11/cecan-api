import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import SaveCadastroStrategy from '../../strategy/Cadastro/SaveCadastroStrategy.js';

export default class CreateCadastroUseCase extends AbstractUseCase {
    constructor({
        cadastroService = null
    } = {}) {
        super();
        this.cadastroService = cadastroService;
        
        this.strategies = [
            new SaveCadastroStrategy({
                cadastroService: this.cadastroService
            }),
        ]
    }

    async createCadastro(entity) {
        return await this.executeStrategies(entity, new Result());
    }
}