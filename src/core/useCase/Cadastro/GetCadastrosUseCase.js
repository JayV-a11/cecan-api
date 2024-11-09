import AbstractUseCase from "../AbstractUseCase.js";
import Result from "../../util/Result.js";

//Strategies
import GetCadastrosStrategy from "../../strategy/Cadastro/GetCadastrosStrategy.js";

export default class GetCadastrosUseCase extends AbstractUseCase {
  constructor({ cadastroService = null } = {}) {
    super();
    this.cadastroService = cadastroService;
    this.strategies = [
      new GetCadastrosStrategy({
        cadastroService: this.cadastroService,
      }),
    ];
  }

  async getCadastros(filter) {
    return await this.executeStrategies(filter, new Result());
  }
}
