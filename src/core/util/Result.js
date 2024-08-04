export default class Result {
    constructor({
        error = [],
        status = null,
        data = []
    } = {}) {
        this.error = error;
        this.status = status;
        this.data = data;
    }
}