import Paciente from '../../../../../../core/domain/Paciente.js';
import PacienteModel from '../PacienteModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class PacienteMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${PacienteModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${Paciente.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new Paciente();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new PacienteModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}