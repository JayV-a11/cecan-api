import AbstractController from "./AbstractController.js";
import UserService from "../../../outbound/service/UserService.js";
import LoginUseCase from "../../../core/useCase/Authentication/LoginUseCase.js";
import AuthFilter from "../filter/AuthFilter.js";
import AuthFilterMapper from "../filter/mapper/AuthFilterMapper.js";
import TokenModel from "../model/TokenModel.js";
import TokenMapper from "../model/mapper/TokenMapper.js";
import RefreshTokenUseCase from "../../../core/useCase/Authentication/RefreshTokenUseCase.js";

export default class AuthController extends AbstractController {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.tokenMapper = new TokenMapper();
    this.userService = new UserService();
    this.authFilterMapper = new AuthFilterMapper();
    this.refreshTokenUseCase = new RefreshTokenUseCase({
      userService: this.userService,
    });
    this.loginUseCase = new LoginUseCase({
      userService: this.userService,
    });
  }

  async login(req, res, next) {
    const authFilter = new AuthFilter(req);
    const filter = this.authFilterMapper.adapt(authFilter);

      const result = await this.loginUseCase.login(filter);
      res.status(result.status);
      if(result.error && result.error.length > 0) {
        const error = result.error.map(err => err);
        res.send(error);
      } else {
        res.send(result.data);
      }
  }

  async refreshToken(req, res, next) {
    const tokenModel = new TokenModel(req.body);
    const token = this.tokenMapper.adapt(tokenModel);
    const result = await this.refreshTokenUseCase.refreshToken(token);

    res.status(result.status);
    res.send(result);
  }
}
