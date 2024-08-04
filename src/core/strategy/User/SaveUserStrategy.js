import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class SaveUserStrategy extends AbstractStrategy {
    constructor ({
        userService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.userService = userService;
    }

    async execute(user, result = this.result) {
        try {
            user = await this.userService.createUser(user);
            result.status = 201;
            result.data = [user];
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: user,
            result
        };
    }
}