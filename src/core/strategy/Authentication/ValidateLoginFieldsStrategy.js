import AbstractStrategy from "../AbstractStrategy.js";
import Result from "../../util/Result.js";

export default class ValidateLoginFieldsStrategy extends AbstractStrategy {
  constructor({ result = new Result() } = {}) {
    super();
    this.result = result;
  }

  async execute(data, result = this.result) {
    if (!data.fields || !data.fields.login || data.fields.login.length === 0) {
      result.error.push('O campo "email" é obrigatório!');
    }

    if (
      !data.fields ||
      !data.fields.password ||
      data.fields.password.length === 0
    ) {
      result.error.push('O campo "senha" é obrigatório!');
    }

    if (result.error.length > 0) {
      result.status = 406;
    }

    return {
      entity: data,
      result,
    };
  }
}
