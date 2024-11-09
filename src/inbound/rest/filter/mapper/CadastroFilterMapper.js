import AbstractFilter from '../../../../core/filter/AbstractFilter.js';

export default class CadastroFilterMapper {
    constructor() {}

    adapt(cadastroFilter) {
        const filter = new AbstractFilter();

        const filterKeys = Object.keys(cadastroFilter.filter);

        const fields = {};

        for (const key of filterKeys) {
            if(key === 'limit') {
                filter.limit = cadastroFilter.filter[key];
                continue;
            }
            if(key === 'page') {
                filter.page = cadastroFilter.filter[key];
                continue;
            }
            if(key === 'group') {
                filter.group = cadastroFilter.filter[key].split(',');
                continue;
            }
            if(key === 'sort') {
                filter.sort = cadastroFilter.filter[key].split(',');
                continue;
            }
            if(key === 'id') {
                fields[key] = cadastroFilter.filter[key];
                continue;
            }
            if(key === 'nome_paciente') {
                fields[key] = cadastroFilter.filter[key];
                continue;
            }
            if(key === 'status') {
                fields[key] = cadastroFilter.filter[key];
                continue;
            }
        }

        if (Object.keys(fields).length > 0) {
            filter.fields = fields;
        }

        return filter;
    }
}