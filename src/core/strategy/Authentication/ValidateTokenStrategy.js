import AbstractStrategy from "../AbstractStrategy.js";
import BasicAuth from "../../util/BasicAuth.js";
import Result from "../../util/Result.js";

export default class ValidateTokenStrategy extends AbstractStrategy {
  constructor({ result = new Result() } = {}) {
    super();
    this.result = result;
  }

  async execute(data, result = this.result) {
    const auth = new BasicAuth();

    try {
      auth.verifyToken(data.token);
    } catch (err) {
      if (err.name === "JsonWebTokenError") {
        result.error.push("Token inválido");
        result.status = 401;
      }
      if (err.name === "TokenExpiredError") {
        result.error.push("Token expirado");
        result.status = 401;
      }
    }

    return {
      entity: data,
      result,
    };
  }
}
