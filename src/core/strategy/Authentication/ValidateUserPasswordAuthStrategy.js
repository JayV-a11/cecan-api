import AbstractStrategy from "../AbstractStrategy.js";
import Result from "../../util/Result.js";
import bcrypt from "bcryptjs";

export default class ValidateUserPasswordAuthStrategy extends AbstractStrategy {
  constructor({ result = new Result(), userService = null } = {}) {
    super();
    this.result = result;
    this.userService = userService;
  }

  async execute(user, result = this.result) {
    const isPasswordCorrect = await bcrypt.compare(
      user.password,
      user.password_hash
    );

    if (!isPasswordCorrect) {
      result.error.push("Usuário ou Senha incorretos");
      result.status = 401;
    }

    return {
      entity: user,
      result,
    };
  }
}
