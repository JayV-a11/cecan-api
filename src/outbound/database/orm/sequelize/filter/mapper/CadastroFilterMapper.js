import DefaultFilter from "../DefaultFilter.js";

export default class CadastroFilterMapper {
    constructor() {}

    adapt(filter) {
        const cadastroFilter = new DefaultFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                cadastroFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                cadastroFilter[key] = [];
                for (const group of filter.group) {
                    cadastroFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                cadastroFilter[key] = [];
                for (const sort of filter.sort) {
                    cadastroFilter[key].push(sort);
                }
                continue;
            }
            
            if(key === 'id') {
                cadastroFilter.concat({id: filter.id});
            }

            if (key === 'fields' && filter.fields) {
                const fieldsKeys = Object.keys(filter.fields);
                for (const fieldKey of fieldsKeys) {
                    cadastroFilter.concat({[fieldKey]: filter.fields[fieldKey]});
                }
            }
        }

        if (filter.page && filter.limit) {
            cadastroFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return cadastroFilter;
    }
}