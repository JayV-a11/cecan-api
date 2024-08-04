import IRepository from './IRepository.js';

export default class IPacienteRepository extends IRepository {
    constructor(connection) {
        super(connection);
    }
}