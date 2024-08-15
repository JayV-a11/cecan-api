import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';
import QuadroClinico from '../../domain/QuadroClinico.js';
import QuadroClinicoService from '../../../outbound/service/QuadroClinicoService.js';

export default class SaveQuadroClinicoStrategy extends AbstractStrategy {
    constructor({
        quadroClinicoService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.quadroClinicoService = new QuadroClinicoService();
    }

    async execute(entity, result = this.result) {
        try {
            const quadroClinico = new QuadroClinico(entity.quadroClinico);
            const res = await this.quadroClinicoService.createQuadroClinico(quadroClinico);
            result.status = 201;
            result.data = res;
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity,
            result
        };
    }
}
