import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';
import Paciente from '../../domain/Paciente.js';
import PacienteService from '../../../outbound/service/PacienteService.js';

export default class SavePacienteStrategy extends AbstractStrategy {
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
            const paciente = new Paciente(entity.paciente);
            const res = await this.pacienteService.createPaciente(paciente);
            entity.endereco.paciente_id =  res.dataValues.id;
            entity.quadroClinico.paciente_id = res.dataValues.id;
            entity.sitSocieconomica.paciente_id = res.dataValues.id;
            result.status = 201;
            result.data = res;
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