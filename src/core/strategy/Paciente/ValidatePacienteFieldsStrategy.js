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

    async execute(user, result = this.result) {
        if (!(user instanceof Paciente)) {
            result.error.push('Entidade recebida não é um paciente!');
        }

        if (!user || !user.nome || user.nome.length === 0) {
            result.error.push('O campo "nome" é obrigatório!');
        }
        if (!user.rg || user.rg.length === 0) {
            result.error.push('O campo "RG" é obrigatório!');
        }
        if (!user.cpf || user.cpf.length === 0) {
            result.error.push('O campo "CPF" é obrigatório!');
        }
        if (!user.nascimento || user.nascimento.length === 0) {
            result.error.push('O campo "nascimento" é obrigatório!');
        }
        if (!user.sus || user.sus.length === 0) {
            result.error.push('O campo "número SUS" é obrigatório!');
        }
        if (typeof user.convenio !== 'boolean') {
            result.error.push('O campo "convenio" é obrigatório e deve ser booleano!');
        }
        if (!user.estado_civil || user.estado_civil.length === 0) {
            result.error.push('O campo "estado_civil" é obrigatório!');
        }
        if (!user.escolaridade || user.escolaridade.length === 0) {
            result.error.push('O campo "escolaridade" é obrigatório!');
        }
        if (!user.outro_contato || user.outro_contato.length === 0) {
            result.error.push('O campo "outro_contato" é obrigatório!');
        }
        if (!user.parentesco || user.parentesco.length === 0) {
            result.error.push('O campo "parentesco" é obrigatório!');
        }

        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: user,
            result
        };
    }
}
