import AbstractUseCase from "../AbstractUseCase.js";
import Result from "../../util/Result.js";

//Strategies
import ValidateLoginFieldsStrategy from "../../strategy/Authentication/ValidateLoginFieldsStrategy.js";
import ValidateLoginAuthStrategy from "../../strategy/Authentication/ValidateLoginAuthStrategy.js";
import GenerateAuthTokenStrategy from "../../strategy/Authentication/GenerateAuthTokenStrategy.js";
import ValidateUserPasswordAuthStrategy from "../../strategy/Authentication/ValidateUserPasswordAuthStrategy.js";

export default class LoginUseCase extends AbstractUseCase {
  constructor({ userService = null } = {}) {
    super();
    this.userService = userService;
    this.strategies = [
      new ValidateLoginFieldsStrategy(),
      new ValidateLoginAuthStrategy({ userService: this.userService }),
      new ValidateUserPasswordAuthStrategy(),
      new GenerateAuthTokenStrategy(),
    ];
  }

  async login(user) {
    return await this.executeStrategies(user, new Result());
  }
}
