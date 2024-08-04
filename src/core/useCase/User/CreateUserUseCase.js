import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import ValidateUserFieldsStrategy from '../../strategy/User/ValidateUserFieldsStrategy.js';
import SaveUserStrategy from '../../strategy/User/SaveUserStrategy.js';

export default class CreateUserUseCase extends AbstractUseCase {
    constructor({
        userService = null
    } = {}) {
        super();
        this.userService = userService;
        this.strategies = [
            new ValidateUserFieldsStrategy(),
            new SaveUserStrategy({
                userService: this.userService
            }),
        ]
    }

    async createUser(user) {
        return await this.executeStrategies(user, new Result());
    }
}