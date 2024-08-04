export default class IUserService {
    constructor () {
        if (!this.createUser) throw new Error(`Method createUser not implemented in ${this.constructor.name})`);
        if (!this.findAllUsers) throw new Error(`Method findAllUsers not implemented in ${this.constructor.name})`);
    }
}