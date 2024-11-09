import AbstractController from "./AbstractController.js";

import CadastroMapper from "../model/mapper/CadastroMapper.js";
import CadastroService from "../../../outbound/service/CadastroService.js";
import CreateCadastroUseCase from "../../../core/useCase/Cadastro/CreateCadastroUseCase.js";
import GetCadastrosUseCase from "../../../core/useCase/Cadastro/GetCadastrosUseCase.js";
import UpdateCadastroUseCase from "../../../core/useCase/Cadastro/UpdateCadastroUseCase.js";
import CadastroModel from "../model/CadastroModel.js";
import GetOneCadastrosUseCase from "../../../core/useCase/Cadastro/GetOneCadastrosUseCase.js";

export default class PacienteController extends AbstractController {
  constructor() {
    super();
    this.createCadastro = this.createCadastro.bind(this);
    this.getCadastros = this.getCadastros.bind(this);
    this.getOneCadastro = this.getOneCadastro.bind(this);
    this.updateCadastroStatus = this.updateCadastroStatus.bind(this);
    this.cadastroService = new CadastroService();
    this.cadastroMapper = new CadastroMapper();

    this.getOneCadastrosUseCase = new GetOneCadastrosUseCase({
      cadastroService: this.cadastroService,
    });
    this.createCadastroUseCase = new CreateCadastroUseCase({
      cadastroService: this.cadastroService,
    });
    this.getCadastrosUseCase = new GetCadastrosUseCase({
      cadastroService: this.cadastroService,
    });
    this.updateCadastroUseCase = new UpdateCadastroUseCase({
      cadastroService: this.cadastroService,
    });
  }

  async createCadastro(req, res, next) {
    const cadastro = new CadastroModel(req.body);

    try {
        const result = await this.createCadastroUseCase.createCadastro(cadastro);
        
        const formattedResponseData = [];
        formattedResponseData.push(
            this.cadastroMapper.adapt(result.data)
        );

        result.data = formattedResponseData[0];

        return res.status(result.status).send(result.data);
    } catch (error) {
        return res.status(500).json({ message: "Erro interno ao criar cadastro", error: error.message });
    }
}

  async getCadastros(req, res, next) {
    const cadastro = new CadastroModel(req.params);
    const result = await this.getCadastrosUseCase.getCadastros(cadastro);
    const formattedResponseData = [];
    formattedResponseData.push(this.cadastroMapper.adapt(result.data));
    result.data = formattedResponseData;
    res.status(result.status);
    res.send(result.data);
  }

  async getOneCadastro(req, res, next) {
    const cadastro = new CadastroModel(req.params);
    const result = await this.getOneCadastrosUseCase.getOneCadastro(cadastro);
    const formattedResponseData = [];
    formattedResponseData.push(this.cadastroMapper.adapt(result.data));

    result.data = formattedResponseData;
    res.status(result.status);
    res.send(result.data[0]);
  }

  async updateCadastroStatus(req, res, next) {
    const cadastroModel = new CadastroModel(req.body);
    const cadastro = this.cadastroMapper.adapt(cadastroModel);
    const result = await this.updateCadastroUseCase.updateCadastro(cadastro);
    const formattedResponseData = [];

    for (const data of result.data) {
      formattedResponseData.push(this.cadastroMapper.adapt(data));
    }

    result.data = formattedResponseData[0];
    res.status(result.status);
    res.send(result.data);
  }
  
}
