import jwt from 'jsonwebtoken';

export default class BasicAuth {
  constructor({ login = '', id = null } = {}) {
    this.login = login;
    this.id = id ? id : null;
  }

  generateToken(time = '6hr', type = 'AT') {
    const basicAuth = { id: this.id, type: type, basicAuth: true };

    return jwt.sign({ ...basicAuth }, process.env.APP_SECRET, {
      expiresIn: time,
    });
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.APP_SECRET);
  }
};
