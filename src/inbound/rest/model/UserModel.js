import AbstractModel from './AbstractModel.js';

export default class UserModel extends AbstractModel {
    constructor ({
        id = null,
        name = '',
        login = '',
        password = '',
    } = {}) {
        super();
        this.id = id;
        this.name = name,
        this.login = login;
        this.password = password;
    }

}