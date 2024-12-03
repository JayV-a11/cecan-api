import AbstractStrategy from '../AbstractStrategy.js';
import Paciente from '../../domain/Paciente.js';
import Result from '../../util/Result.js';

export default class ValidatePacienteFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(entity, result = this.result) {
        const paciente = entity.paciente;

        console.log(entity);

        if (!paciente || !paciente.nome || paciente.nome.length === 0) {
            result.error.push('O campo "nome" é obrigatório!');
        }
        if (!paciente.rg || paciente.rg.length === 0) {
            result.error.push('O campo "RG" é obrigatório!');
        }
        if (!paciente.cpf || paciente.cpf.length === 0) {
            result.error.push('O campo "CPF" é obrigatório!');
        }
        if (!paciente.nascimento || paciente.nascimento.length === 0) {
            result.error.push('O campo "nascimento" é obrigatório!');
        }
        if (!paciente.sus || paciente.sus.length === 0) {
            result.error.push('O campo "número SUS" é obrigatório!');
        }
        if (typeof paciente.convenio !== 'boolean') {
            result.error.push('O campo "convenio" é obrigatório e deve ser booleano!');
        }
        if (!paciente.estado_civil || paciente.estado_civil.length === 0) {
            result.error.push('O campo "estado_civil" é obrigatório!');
        }
        if (!paciente.escolaridade || paciente.escolaridade.length === 0) {
            result.error.push('O campo "escolaridade" é obrigatório!');
        }
        if (!paciente.contato || paciente.contato.length === 0) {
            result.error.push('O campo "contato" é obrigatório!');
        }
        
        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: entity,
            result
        };
    }
}
