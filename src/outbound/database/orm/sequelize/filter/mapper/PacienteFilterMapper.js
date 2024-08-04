import PacienteFilter from '../PacienteFilter.js';

export default class PacienteFilterMapper {
    constructor() {}

    adapt(filter) {
        const pacienteFilter = new PacienteFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                pacienteFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                pacienteFilter[key] = [];
                for (const group of filter.group) {
                    pacienteFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                pacienteFilter[key] = [];
                for (const sort of filter.sort) {
                    pacienteFilter[key].push(sort);
                }
                continue;
            }

            if (key === 'fields' && filter.fields) {
                const fieldsKeys = Object.keys(filter.fields);
                for (const fieldKey of fieldsKeys) {
                    pacienteFilter.concat({[fieldKey]: filter.fields[fieldKey]});
                }
            }
        }

        if (filter.page && filter.limit) {
            pacienteFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return pacienteFilter;
    }
}