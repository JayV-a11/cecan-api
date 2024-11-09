export default class ICadastroService {
    constructor () {
        if (!this.createCadastro) throw new Error(`Method createCadastro not implemented in ${this.constructor.name})`);
        if (!this.findAllCadastros) throw new Error(`Method findAllCadastros not implemented in ${this.constructor.name})`);
    }
}