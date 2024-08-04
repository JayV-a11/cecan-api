import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateUserUpdateFieldsStrategy from '../../strategy/User/ValidateUserUpdateFieldsStrategy.js';
import UpdateUserStrategy from '../../strategy/User/UpdateUserStrategy.js';
import FindAllUsersStrategy from '../../strategy/User/FindAllUsersStrategy.js';

export default class UpdateUserUseCase extends AbstractUseCase {
    constructor({
        userService = null
    } = {}) {
        super();
        this.userService = userService;
        this.strategies = [
            new ValidateUserUpdateFieldsStrategy(),
            new UpdateUserStrategy({
                userService: this.userService
            }),
            new FindAllUsersStrategy({
                userService: this.userService
            }),
        ]
    }

    async updateUser(user) {
        return await this.executeStrategies(user, new Result());
    }
}