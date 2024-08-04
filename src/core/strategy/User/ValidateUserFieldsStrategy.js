import AbstractStrategy from '../AbstractStrategy.js';
import User from '../../domain/User.js';
import Result from '../../util/Result.js';

export default class ValidateUserFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(user, result = this.result) {
        if (!typeof user === new User()) {
            result.error.push('Entidade recebida não é um usuário!');
        }

        if (!user || !user.name || user.name.length === 0) {
            result.error.push('O campo "nome" é obrigatório!');
        }

        if (!user || !user.login || user.login.length === 0) {
            result.error.push('O campo "email" é obrigatório!');
        }

        if (!user || !user.password || user.password.length === 0) {
            result.error.push('O campo "senha" é obrigatório!');
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