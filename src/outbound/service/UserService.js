import IUserService from "../../core/service/IUserService.js";
import UserFilterMapper from "../database/orm/sequelize/filter/mapper/UserFilterMapper.js";
import AuthFilterMapper from "../database/orm/sequelize/filter/mapper/AuthFilterMapper.js";
import UserMapper from "../database/orm/sequelize/model/mapper/UserMapper.js";
import UserRepository from "../database/orm/sequelize/repository/UserRepository.js";

export default class UserService extends IUserService {
  constructor({ userRepository = null } = {}) {
    super();
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.findAllUsers = this.findAllUsers.bind(this);
    this.userRepository = new UserRepository();
    this.userMapper = new UserMapper();
    this.userFilterMapper = new UserFilterMapper();
    this.authFilterMapper = new AuthFilterMapper();
  }

  async createUser(user) {
    const userModel = await this.userRepository.save(user);
    return this.userMapper.adapt(userModel);
  }

  async updateUser(user) {
    const userModel = await this.userRepository.update(user);
    return this.userMapper.adapt(userModel);
  }

  async findAllUsers(filter) {
    const userFilter = this.userFilterMapper.adapt(filter);
    filter = userFilter.mountFilter();

    const userModels = await this.userRepository.findAll(filter);

    const users = [];

    for (const userModel of userModels) {
      users.push(this.userMapper.adapt(userModel));
    }

    return users;
  }

  async findOneUser(filter) {
    const userFilter = this.authFilterMapper.adapt(filter);

    filter = userFilter.mountFilter();
    const userModel = await this.userRepository.findOne(filter);

    if (!userModel) return null;

    return this.userMapper.adapt(userModel);
  }
}
