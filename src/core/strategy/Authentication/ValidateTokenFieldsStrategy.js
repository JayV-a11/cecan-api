import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class ValidateTokenFieldsStrategy extends AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(data, result = this.result) {
        if (!data.refreshToken || data.refreshToken.length === 0) {
            result.error.push('missing refresh token!');
        }

        if (!data.token || data.token.length === 0) {
            result.error.push('missing token!');
        }


        if (result.error.length > 0) {
            result.status = 406;
        }

        return {
            entity: data,
            result
        };
    }
}