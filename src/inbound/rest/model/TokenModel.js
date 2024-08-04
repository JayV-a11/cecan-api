import AbstractModel from './AbstractModel.js';

export default class TokenModel extends AbstractModel {
    constructor ({
        id = null,
        login = '',
        token = '',
        refreshToken = '',
    } = {}) {
        super();
        this.id = id;
        this.login = login,
        this.token = token;
        this.refreshToken = refreshToken;
    }

}