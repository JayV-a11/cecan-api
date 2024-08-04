import Result from '../util/Result.js';

export default class AbstractStrategy {
    constructor ({
        result = new Result()
    } = {}) {
        //Force Implement
        if (!this.execute) throw new Error(`Method execute not implemented in ${this.constructor.name})!`);
        
        this.result = result;
    }
}