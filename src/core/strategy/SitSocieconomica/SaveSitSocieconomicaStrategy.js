import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';
import SitSocieconomica from '../../domain/SitSocieconomica.js';
import SitSocieconomicaService from '../../../outbound/service/SitSocieconomicaService.js';

export default class SaveSitSocieconomicaStrategy extends AbstractStrategy {
    constructor({
        sitSocieconomicaService = null,
        result = new Result()
    } = {}) {
        super();
        this.result = result;
        this.sitSocieconomicaService = new SitSocieconomicaService();
    }

    async execute(entity, result = this.result) {
        try {
            const sitSocieconomica = new SitSocieconomica(entity.sitSocieconomica);
            const res = await this.sitSocieconomicaService.createSitSocieconomica(sitSocieconomica);
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
