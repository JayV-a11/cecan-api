import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';
import Endereco from '../../domain/Endereco.js';

export default class SavePacienteStrategy extends AbstractStrategy {
    constructor ({
        pacienteService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.pacienteService = pacienteService;
    }

    async execute(paciente, result = this.result) {
        try {
            const endereco = new Endereco(paciente);
            paciente = await this.pacienteService.createPaciente(paciente);
            endereco.paciente_id = paciente.id;
            result.status = 201;
            result.data = endereco;
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: result.data,
            result
        };
    }
}