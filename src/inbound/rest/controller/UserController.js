import AbstractController from './AbstractController.js';
import UserModel from '../model/UserModel.js';
import UserService from '../../../outbound/service/UserService.js';
import UserMapper from '../model/mapper/UserMapper.js';
import CreateUserUseCase from '../../../core/useCase/User/CreateUserUseCase.js';
import UpdateUserUseCase from '../../../core/useCase/User/UpdateUserUseCase.js';
import FindAllUsersUseCase from '../../../core/useCase/User/FindAllUsersUseCase.js';
import UserFilter from '../filter/UserFilter.js'
import UserFilterMapper from '../filter/mapper/UserFilterMapper.js'
 
export default class UserController extends AbstractController {
    constructor () {
        super();
        this.create = this.create.bind(this);
        this.findAll = this.findAll.bind(this);
        this.update = this.update.bind(this);
        this.userMapper = new UserMapper();
        this.userService = new UserService();
        this.userFilterMapper = new UserFilterMapper();
        this.createUserUseCase = new CreateUserUseCase({
          userService: this.userService
        });
        this.updateUserUseCase = new UpdateUserUseCase({
          userService: this.userService
        });
        this.findAllUsersUseCase = new FindAllUsersUseCase({
          userService: this.userService
        });

    }

    async create (req, res, next) {
      const userModel = new UserModel(req.body);
      const user = this.userMapper.adapt(userModel);
      const result = await this.createUserUseCase.createUser(user);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.userMapper.adapt(data));
      }

      result.data = formattedResponseData;
      res.status(result.status);
      res.send(result.data);
    }

    async update (req, res, next) {
      const userModel = new UserModel(req.body);
      const user = this.userMapper.adapt(userModel);
      const result = await this.updateUserUseCase.updateUser(user);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.userMapper.adapt(data));
      }

      result.data = formattedResponseData[0];
      res.status(result.status);
      res.send(result.data);
    }

    async findAll (req, res, next) {
      const userFilter = new UserFilter(req);
      const filter = this.userFilterMapper.adapt(userFilter);

      const result = await this.findAllUsersUseCase.findAllUsers(filter);
      const formattedResponseData = [];

      for (const data of result.data) {
        formattedResponseData.push(this.userMapper.adapt(data));
      }

      result.data = formattedResponseData;

      res.status(result.status);
      res.send(result.data);
    }
}