import QuadroClinico from '../../../../../../core/domain/QuadroClinico.js';
import QuadroClinicoModel from '../QuadroClinicoModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class QuadroClinicoMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${QuadroClinicoModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${QuadroClinico.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new QuadroClinico();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new QuadroClinicoModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}
