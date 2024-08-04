import AbstractEntity from "./AbstractEntity.js";

export default class User extends AbstractEntity {
  constructor({ id = null, name = "", login = "", password = "" } = {}) {
    super();
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}
