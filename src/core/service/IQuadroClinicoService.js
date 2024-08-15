export default class IQuadroClinicoService {
    constructor () {
        if (!this.createQuadroClinico) throw new Error(`Method createQuadroClinico not implemented in ${this.constructor.name})`);
    }
}