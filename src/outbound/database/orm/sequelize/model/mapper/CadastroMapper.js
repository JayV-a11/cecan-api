import Cadastro from '../../../../../../core/domain/Cadastro.js';
import CadastroModel from '../CadastroModel.js';
import AbstractMapper from './AbstractMapper.js';

export default class CadastroMapper extends AbstractMapper {
    constructor () {
        super();
        this.adapt = this.adapt.bind(this);
    }

    adapt(object) {
        switch (object.constructor.name) {
            case `${CadastroModel.constructor.name}`:
                return this.adaptModelToEntity(object);
            case `${Cadastro.constructor.name}`:
                return this.adaptEntityToModel(object);
            default:
                return object;
        }
    }

    adaptModelToEntity (model) {
        const entity = new Cadastro();

        const keys = Object.keys(model);

        for (const key of keys) {
            entity[key] = model[key];
        }
    }

    adaptEntityToModel (entity) {
        const model = new CadastroModel();

        const keys = Object.keys(entity);

        for (const key of keys) {
            model[key] = entity[key];
        }
    }
}