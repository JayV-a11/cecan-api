import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class FindAllUsersStrategy extends AbstractStrategy {
    constructor({
        result = new Result(),
        userService = null
    } = {}) {
        super();
        this.result = result;
        this.userService = userService;
    }

    async execute(filter, result = this.result) {
        try {
            const users = await this.userService.findAllUsers(filter);
            result.data = users;
            result.status = (users.length === 0) ? 204 : 200;
        } catch(error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: filter,
            result
        }
    }
}