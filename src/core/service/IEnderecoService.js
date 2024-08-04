export default class IEnderecoService {
    constructor () {
        if (!this.createEndereco) throw new Error(`Method createEndereco not implemented in ${this.constructor.name})`);
    }
}