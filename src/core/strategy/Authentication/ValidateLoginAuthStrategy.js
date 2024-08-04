import AbstractStrategy from "../AbstractStrategy.js";
import Result from "../../util/Result.js";

export default class ValidateLoginFieldsStrategy extends AbstractStrategy {
  constructor({ result = new Result(), userService = null } = {}) {
    super();
    this.result = result;
    this.userService = userService;
  }

  async execute(filter, result = this.result) {
    const password = filter.fields.password;
    filter = { ...filter, fields: { login: filter.fields.login } };

    let entity = [];
    const res = await this.userService.findOneUser(filter);
    if (!res || !res.dataValues) {
      result.error.push("Usuário ou Senha incorretos");
      result.status = 401;
    } else {
        entity = {...res.dataValues, password: password, password_hash: res.dataValues.password};
    }

    return {
      entity: entity,
      result,
    };
  }
}
