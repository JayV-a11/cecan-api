import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';
import Paciente from '../../domain/Paciente.js';
import PacienteService from '../../../outbound/service/PacienteService.js';

export default class RemoveInvalidPacienteInfoStrategy extends AbstractStrategy {
    constructor ({
        pacienteService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.pacienteService = new PacienteService();
    }

    async execute(entity, result = this.result) {
        try {
            await this.pacienteService.removePaciente(entity.endereco.paciente_id);
            result.status = 400;
            result.data = null;
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: entity,
            result
        };
    }
}