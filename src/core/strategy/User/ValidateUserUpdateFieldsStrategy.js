import AbstractStrategy from "../AbstractStrategy.js";
import User from "../../domain/User.js";
import Result from "../../util/Result.js";

export default class ValidateUserUpdateFieldsStrategy extends AbstractStrategy {
  constructor({ result = new Result() } = {}) {
    super();
    this.result = result;
  }

  async execute(user, result = this.result) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!typeof user === new User()) {
      result.error.push("Entidade recebida não é um usuário!");
    }

    if (!user || !user.id || user.id.length === 0) {
      result.error.push('O id é obrigatório!');
    }

    if (!user || !user.name || user.name.length === 0) {
        result.error.push('O campo "usuário" é obrigatório!');
      }

    if (!user || !user.login || user.login.length === 0) {
        result.error.push('O campo "e-mail" é obrigatório!');
      }
  

    if (!emailPattern.test(user.login)) {
      result.error.push('O e-mail é inválido!');
    }

    if (result.error.length > 0) {
      result.status = 406;
    }

    return {
      entity: user,
      result,
    };
  }
}
