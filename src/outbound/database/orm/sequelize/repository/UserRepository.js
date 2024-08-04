import IUserRepository from "../../../../../core/repository/IUserRepository.js";
import UserModel from "../model/UserModel.js";
import bcrypt from "bcryptjs";
export default class UserRepository extends IUserRepository {
  constructor() {
    super(UserModel.init());
  }

  async save(user) {
    return await this.connection.create({
      name: user.name,
      login: user.login,
      password: await bcrypt.hash(user.password, 8),
    });
  }

  async update(user) {
    const data =  {
      name: user.name,
      login: user.login,
    }

    if(user.password !== null && user.password !== "") {
      data.password = await bcrypt.hash(user.password, 8);
    }

    return await this.connection.update(data,
      {
        where: {
          id: user.id,
        },
      }
    );
  }

  async findAll(filter) {
    return await this.connection.findAll(filter);
  }

  async findOne(filter) {
    return await this.connection.findOne(filter);
  }
}
