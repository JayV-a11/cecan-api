import AbstractStrategy from '../AbstractStrategy.js';
import SitSocieconomica from '../../domain/SitSocieconomica.js';
import Result from '../../util/Result.js';

export default class ValidateSitSocieconomicaFieldsStrategy extends AbstractStrategy {
    constructor({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(entity, result = this.result) {
        const sitSocieconomica = entity.sitSocieconomica;

        if (!sitSocieconomica || !sitSocieconomica.paciente_id || sitSocieconomica.paciente_id.length === 0) {
            result.error.push('O campo "paciente_id" é obrigatório!');
        }
        if (typeof sitSocieconomica.recebe_beneficio !== 'boolean') {
            result.error.push('O campo "recebe_beneficio" é obrigatório e deve ser booleano!');
        }
        if (typeof sitSocieconomica.aposentado !== 'boolean') {
            result.error.push('O campo "aposentado" é obrigatório e deve ser booleano!');
        }
        if (typeof sitSocieconomica.desempregado !== 'boolean') {
            result.error.push('O campo "desempregado" é obrigatório e deve ser booleano!');
        }
        if (typeof sitSocieconomica.moradia !== 'boolean') {
            result.error.push('O campo "moradia" é obrigatório e deve ser booleano!');
        }
        if (!sitSocieconomica.apoio || sitSocieconomica.apoio.length === 0) {
            result.error.push('O campo "apoio" é obrigatório!');
        }
        if (!sitSocieconomica.renda_per_capita || sitSocieconomica.renda_per_capita.length === 0) {
            result.error.push('O campo "renda_per_capita" é obrigatório!');
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
