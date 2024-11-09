import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import GetPacientesStrategy from '../../strategy/Paciente/GetPacientesStrategy.js';
import GenerateXLSXStrategy from '../../strategy/Paciente/GenerateXLSXStrategy.js';

export default class GenerateXLSXFromDataUseCase extends AbstractUseCase {
    constructor({
        pacienteService = null
    } = {}) {
        super();
        this.pacienteService = pacienteService;
        this.strategies = [
            new GetPacientesStrategy({
                pacienteService: this.pacienteService
            }),
            new GenerateXLSXStrategy({
                pacienteService: this.pacienteService
            }),
        ]
    }

    async generate(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}