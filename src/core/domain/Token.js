import AbstractEntity from "./AbstractEntity.js";

export default class Token extends AbstractEntity {
  constructor({ id = null, login = "", token = "", refreshToken = "" } = {}) {
    super();
    this.id = id;
    this.login = login;
    this.token = token;
    this.refreshToken = refreshToken;
  }
}
