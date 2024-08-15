import SitSocieconomica from '../../../../../../core/domain/SitSocieconomica.js';
import SitSocieconomicaModel from '../SitSocieconomicaModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class SitSocieconomicaMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${SitSocieconomicaModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${SitSocieconomica.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new SitSocieconomica();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new SitSocieconomicaModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}
