import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class GetPacientesStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        pacienteService = null
    } = {}) {
        super();
        this.result = result;
        this.pacienteService = pacienteService;
    }

    async execute(filter, result = this.result) {
        try {
            const pacientes = await this.pacienteService.findAllPacientes(filter);
            result.data = pacientes;
            result.status = (pacientes.length === 0) ? 204 : 200;
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