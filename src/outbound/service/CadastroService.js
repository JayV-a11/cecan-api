import ICadastroService from "../../core/service/ICadastroService.js";
import CadastroFilterMapper from "../database/orm/sequelize/filter/mapper/CadastroFilterMapper.js";
import CadastroMapper from "../database/orm/sequelize/model/mapper/CadastroMapper.js";
import CadastroRepository from "../database/orm/sequelize/repository/CadastroRepository.js";

export default class UserService extends ICadastroService {
  constructor({ cadastroRepository = null } = {}) {
    super();
    this.createCadastro = this.createCadastro.bind(this);
    this.updateCadastro = this.updateCadastro.bind(this);
    this.findAllCadastros = this.findAllCadastros.bind(this);
    this.findOneCadastro = this.findOneCadastro.bind(this);
    this.cadastroRepository = new CadastroRepository();
    this.cadastroMapper = new CadastroMapper();
    this.cadastroFilterMapper = new CadastroFilterMapper();
  }

  async createCadastro(cadastro) {
    const cadastroModel = await this.cadastroRepository.save(cadastro);
    return this.cadastroMapper.adapt(cadastroModel);
  }

  async updateCadastro(cadastro) {
    const cadastroModel = await this.cadastroRepository.update(cadastro);
    return this.cadastroMapper.adapt(cadastroModel);
  }

  async findAllCadastros(filter) {
    const cadastroFilter = this.cadastroFilterMapper.adapt(filter);
    filter = cadastroFilter.mountFilter();

    const cadastroModels = await this.cadastroRepository.findAll(filter);

    const cadastros = [];

    for (const cadastroModel of cadastroModels) {
        cadastros.push(this.cadastroMapper.adapt(cadastroModel));
    }

    return cadastros;
  }

  async findOneCadastro(filter) {
    const cadastroFilter = this.cadastroFilterMapper.adapt(filter);
    filter = cadastroFilter.mountFilter();
    const cadastroModel = await this.cadastroRepository.findOne(filter);
    return this.cadastroMapper.adapt(cadastroModel);
  }
}
