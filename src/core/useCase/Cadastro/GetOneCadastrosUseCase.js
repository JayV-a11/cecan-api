import AbstractUseCase from "../AbstractUseCase.js";
import Result from "../../util/Result.js";

//Strategies
import GetOneCadastrosStrategy from "../../strategy/Cadastro/GetOneCadastrosStrategy.js";

export default class GetOneCadastrosUseCase extends AbstractUseCase {
  constructor({ cadastroService = null } = {}) {
    super();
    this.cadastroService = cadastroService;
    this.strategies = [
      new GetOneCadastrosStrategy({
        cadastroService: this.cadastroService,
      }),
    ];
  }

  async getOneCadastro(filter) {
    return await this.executeStrategies(filter, new Result());
  }
}
