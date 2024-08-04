export default class IRepository {
    constructor (connection) {
        this.connection = connection;
        if (!this.save) throw new Error(`Method save not implemented in ${this.constructor.name}`);
    }
}