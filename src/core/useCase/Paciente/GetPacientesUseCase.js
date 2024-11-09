import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import GetPacientesStrategy from '../../strategy/Paciente/GetPacientesStrategy.js';

export default class GetPacientesUseCase extends AbstractUseCase {
    constructor({
        pacienteService = null
    } = {}) {
        super();
        this.pacienteService = pacienteService;
        this.strategies = [
            new GetPacientesStrategy({
                pacienteService: this.pacienteService
            }),
        ]
    }

    async getPacientes(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}