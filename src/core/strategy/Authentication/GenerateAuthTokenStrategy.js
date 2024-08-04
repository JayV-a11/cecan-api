import AbstractStrategy from '../AbstractStrategy.js';
import BasicAuth from "../../util/BasicAuth.js";
import Result from '../../util/Result.js';

export default class GenerateAuthTokenStrategy extends AbstractStrategy {
    constructor ({
        result = new Result(),
    } = {}) {
        super();
        this.result = result;
    }

    async execute(user, result = this.result) {
        const auth = new BasicAuth(user)
        const token = auth.generateToken();
        const refreshToken = auth.generateToken('24h');
        const response = {
            id: user.id,
            login: user.login,
            name: user.name,
            token: token,
            refreshToken: refreshToken
        }
        result.data = response;
        result.status = 200;
       
      
        return {
            entity: response,
            result
        };
    }
}