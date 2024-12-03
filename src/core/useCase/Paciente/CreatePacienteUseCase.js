import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidatePacienteFieldsStrategy from '../../strategy/Paciente/ValidatePacienteFieldsStrategy.js';
import ValidateEnderecoFieldsStrategy from '../../strategy/Endereco/ValidateEnderecoFieldsStrategy.js';
import ValidateQuadroClinicoFieldsStrategy from '../../strategy/QuadroClinico/ValidateQuadroClinicoFieldsStrategy.js';
import ValidateSitSocieconomicaFieldsStrategy from '../../strategy/SitSocieconomica/ValidateSitSocieconomicaFieldsStrategy.js';

import SavePacienteStrategy from '../../strategy/Paciente/SavePacienteStrategy.js';
import SaveEnderecoStrategy from '../../strategy/Endereco/SaveEnderecoStrategy.js';
import SaveQuadroClinicoStrategy from '../../strategy/QuadroClinico/SaveQuadroClinicoStrategy.js';
import SaveSitSocieconomicaStrategy from '../../strategy/SitSocieconomica/SaveSitSocieconomicaStrategy.js';
import RemoveInvalidPacienteInfoStrategy from '../../strategy/Paciente/RemoveInvalidPacienteInfoStrategy.js';

export default class CreatePacienteUseCase extends AbstractUseCase {
    constructor({
        service = null
    } = {}) {
        super();
        this.service = service;
        
        this.strategies = [
            new ValidatePacienteFieldsStrategy(),
            new SavePacienteStrategy({
                service: this.service
            }),
            new ValidateEnderecoFieldsStrategy(),
            new ValidateQuadroClinicoFieldsStrategy(),
            new ValidateSitSocieconomicaFieldsStrategy(),
            new SaveEnderecoStrategy({
                service: this.service
            }),
            new SaveQuadroClinicoStrategy({
                service: this.service
            }),
            new SaveSitSocieconomicaStrategy({
                service: this.service
            }),
        ]
    }

    async createPaciente(entity) {
        const ret = await this.executeStrategies(entity, new Result());
        if (ret.error && ret.error.length > 0) {
            new RemoveInvalidPacienteInfoStrategy().execute(ret.entity, ret.result);
        }
        return ret
    }
}