import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidatePacienteFieldsStrategy from '../../strategy/Paciente/ValidatePacienteFieldsStrategy.js';
import ValidateEnderecoFieldsStrategy from '../../strategy/Endereco/ValidateEnderecoFieldsStrategy.js';
import SavePacienteStrategy from '../../strategy/Paciente/SavePacienteStrategy.js';
import SaveEnderecoStrategy from '../../strategy/Endereco/SaveEnderecoStrategy.js';

import EnderecoService from '../../../outbound/service/EnderecoService.js'
export default class CreatePacienteUseCase extends AbstractUseCase {
    constructor({
        service = null
    } = {}) {
        super();
        this.service = service;
        this.strategies = [
            new ValidatePacienteFieldsStrategy(),
            new ValidateEnderecoFieldsStrategy(),
            new SavePacienteStrategy({
                service: this.service
            }),
            new SaveEnderecoStrategy({
                service: EnderecoService
            })
        ]
    }

    async createPaciente(paciente) {
        return await this.executeStrategies(paciente, new Result());
    }
}