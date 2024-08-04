export default class IPacienteService {
    constructor () {
        if (!this.createPaciente) throw new Error(`Method createPaciente not implemented in ${this.constructor.name})`);
        if (!this.findAllPacientes) throw new Error(`Method findAllPacientes not implemented in ${this.constructor.name})`);
    }
}