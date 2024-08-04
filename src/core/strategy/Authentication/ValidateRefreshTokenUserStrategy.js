import AbstractStrategy from "../AbstractStrategy.js";
import Result from "../../util/Result.js";

export default class ValidateRefreshTokenUserStrategy extends AbstractStrategy {
  constructor({ result = new Result(), userService = null } = {}) {
    super();
    this.result = result;
    this.userService = userService;
  }

  async execute(token, result = this.result) {
    const filter = {fields: { id: token.id } };

    let entity = [];
    const res = await this.userService.findOneUser(filter);
    
    if (!res || !res.dataValues) {
      result.error.push("Usuário não encontrado");
      result.status = 401;
    } else {
        entity = {...token, name: res.dataValues.name};
    }

    return {
      entity: entity,
      result,
    };
  }
}
