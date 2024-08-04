import Endereco from '../../../../../../core/domain/Endereco.js';
import EnderecoModel from '../EnderecoModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class EnderecoMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${EnderecoModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${Endereco.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new User();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new UserModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}