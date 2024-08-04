export default class AbstractFilter {
  constructor({
    limit = null,
    sort = null,
    group = null,
    page = null,
    fields = null,
    search = null,
  } = {}) {
    this.limit = limit;
    this.sort = sort;
    this.group = group;
    this.page = page;
    this.fields = fields;
    this.search = search;
  }
}
