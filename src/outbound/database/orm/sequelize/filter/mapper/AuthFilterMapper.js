import AuthFilter from '../AuthFilter.js';

export default class AuthFilterMapper {
    constructor() {}

    adapt(filter) {
        const authFilter = new AuthFilter();

        const filterKeys = Object.keys(filter);

        for (const key of filterKeys) {
            if(key === 'limit' && filter.limit) {
                authFilter[key] = Number(filter.limit);
                continue;
            }
            if(key === 'group' && filter.group) {
                authFilter[key] = [];
                for (const group of filter.group) {
                    authFilter[key].push(group);
                }
                continue;
            }
            if(key === 'sort' && filter.sort) {
                authFilter[key] = [];
                for (const sort of filter.sort) {
                    authFilter[key].push(sort);
                }
                continue;
            }

            if (key === 'fields' && filter.fields) {
                const fieldsKeys = Object.keys(filter.fields);
                for (const fieldKey of fieldsKeys) {
                    authFilter.concat({[fieldKey]: filter.fields[fieldKey]});
                }
            }
        }

        if (filter.page && filter.limit) {
            authFilter.offset = ((filter.page - 1) * filter.limit);
        }

        return authFilter;
    }
}