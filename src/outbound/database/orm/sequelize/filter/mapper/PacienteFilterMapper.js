import { Op } from "sequelize";
import PacienteFilter from "../PacienteFilter.js";

export default class PacienteFilterMapper {
  constructor() {}

  adapt(filter) {
    const pacienteFilter = new PacienteFilter();
    const filterKeys = Object.keys(filter);

    for (const key of filterKeys) {
      if (key === "limit" && filter.limit) {
        pacienteFilter[key] = Number(filter.limit);
        continue;
      }
      if (key === "group" && filter.group) {
        pacienteFilter[key] = [];
        for (const group of filter.group) {
          pacienteFilter[key].push(group);
        }
        continue;
      }
      if (key === "sort" && filter.sort) {
        pacienteFilter[key] = [];
        for (const sort of filter.sort) {
          pacienteFilter[key].push(sort);
        }
        continue;
      }

      if (key === "fields" && filter.fields) {
        const fieldsKeys = Object.keys(JSON.parse(filter.fields));
        const fieldsObject = JSON.parse(filter.fields);
        pacienteFilter.custom = {};
        for (const fieldKey of fieldsKeys) {
          if (
            fieldKey === "Paciente" ||
            fieldKey === "Endereco" ||
            fieldKey === "QuadroClinico" ||
            fieldKey === "SitSocieconomica"
          ) {
            const subFieldsKeys = Object.keys(fieldsObject[fieldKey]);
            const subFieldsObjects = fieldsObject[fieldKey];
            for (const subFieldsKey of subFieldsKeys) {
              if (subFieldsObjects[subFieldsKey] !== "" ){
                pacienteFilter.custom = {
                  ...pacienteFilter.custom,
                  [fieldKey]: {
                    ...[fieldKey].where,
                    [subFieldsKey]: subFieldsObjects[subFieldsKey],
                    
                  },
                };}
            }
          } else if (fieldsObject[fieldKey]  !== "")
            pacienteFilter.concat({
              [fieldKey]:  fieldsObject[fieldKey],
            });
        }
      }
    }

    if (filter.page && filter.limit) {
      pacienteFilter.offset = (filter.page - 1) * filter.limit;
    }

    return pacienteFilter;
  }
}
