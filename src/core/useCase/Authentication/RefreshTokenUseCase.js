import AbstractUseCase from "../AbstractUseCase.js";
import Result from "../../util/Result.js";

//Strategies
import ValidateRefreshTokenUserStrategy from "../../strategy/Authentication/ValidateRefreshTokenUserStrategy.js";
import ValidateTokenFieldsStrategy from "../../strategy/Authentication/ValidateTokenFieldsStrategy.js";
import ValidateTokenStrategy from "../../strategy/Authentication/ValidateTokenStrategy.js";
import GenerateAuthTokenStrategy from "../../strategy/Authentication/GenerateAuthTokenStrategy.js";

export default class RefreshTokenUseCase extends AbstractUseCase {
  constructor({ userService = null } = {}) {
    super();
    this.userService = userService;
    this.strategies = [
      new ValidateTokenFieldsStrategy(),
      new ValidateRefreshTokenUserStrategy({ userService: this.userService }),
      new ValidateTokenStrategy(),
      new GenerateAuthTokenStrategy(),
    ];
  }

  async refreshToken(token) {
    return await this.executeStrategies(token, new Result());
  }
}
