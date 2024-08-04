import AbstractFilter from "../../../../core/filter/AbstractFilter.js";

export default class AuthFilterMapper {
  constructor() {}

  adapt(authFilter) {
    const filter = new AbstractFilter();

    const filterKeys = Object.keys(authFilter.filter);

    const fields = {};

    for (const key of filterKeys) {
      if (key === "id") {
        fields[key] = authFilter.filter[key];
        continue;
      }
      if (key === "name") {
        fields[key] = authFilter.filter[key];
        continue;
      }
      if (key === "login") {
        fields[key] = authFilter.filter[key];
        continue;
      }
      if (key === "password") {
        fields[key] = authFilter.filter[key];
        continue;
      }
    }

    if (Object.keys(fields).length > 0) {
      filter.fields = fields;
    }

    return filter;
  }
}
