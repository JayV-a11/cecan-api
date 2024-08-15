import AbstractStrategy from '../AbstractStrategy.js';
import QuadroClinico from '../../domain/QuadroClinico.js';
import Result from '../../util/Result.js';

export default class ValidateQuadroClinicoFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(entity, result = this.result) {
        const quadroClinico = entity.quadroClinico

        if (!quadroClinico || !quadroClinico.paciente_id) {
            result.error.push('O campo "paciente_id" é obrigatório!');
        }
        if (typeof quadroClinico.recidiva !== 'boolean') {
            result.error.push('O campo "recidiva" é obrigatório e deve ser booleano!');
        }
        if (typeof quadroClinico.metastase !== 'boolean') {
            result.error.push('O campo "metastase" é obrigatório e deve ser booleano!');
        }
        if (typeof quadroClinico.realizou_cirurgia !== 'boolean') {
            result.error.push('O campo "realizou_cirurgia" é obrigatório e deve ser booleano!');
        }
        if (typeof quadroClinico.realiza_exames_prevencao !== 'boolean') {
            result.error.push('O campo "realiza_exames_prevencao" é obrigatório e deve ser booleano!');
        }
        if (typeof quadroClinico.realiza_tratamento_outras_doencas !== 'boolean') {
            result.error.push('O campo "realiza_tratamento_outras_doencas" é obrigatório e deve ser booleano!');
        }
        if (!quadroClinico.local_tratamento || quadroClinico.local_tratamento.length === 0) {
            result.error.push('O campo "local_tratamento" é obrigatório!');
        }
        if (!quadroClinico.medico_responsavel || quadroClinico.medico_responsavel.length === 0) {
            result.error.push('O campo "medico_responsavel" é obrigatório!');
        }
        if (!quadroClinico.data_diagnostico) {
            result.error.push('O campo "data_diagnostico" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity,
            result
        };
    }
}
