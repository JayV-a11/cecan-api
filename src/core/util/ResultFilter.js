export default class ResultFilter {
  constructor({
    total = 0,
    data = [],
    error = [],
    status = null,
  } = {}) {
    this.data = data;
    this.total = total;
    this.error = error;
    this.status = status;
  }
}
