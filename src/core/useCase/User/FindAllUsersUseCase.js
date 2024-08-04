import AbstractUseCase from '../AbstractUseCase.js';
import Result from '../../util/Result.js';

//Strategies
import FindAllUsersStrategy from '../../strategy/User/FindAllUsersStrategy.js';

export default class FindAllUsersUseCase extends AbstractUseCase {
    constructor({
        userService = null
    } = {}) {
        super();
        this.userService = userService;
        this.strategies = [
            new FindAllUsersStrategy({
                userService: this.userService
            }),
        ]
    }

    async findAllUsers(filter) {
        return await this.executeStrategies(filter, new Result());
    }
}