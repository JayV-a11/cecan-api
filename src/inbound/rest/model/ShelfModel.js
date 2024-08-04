import AbstractModel from "./AbstractModel.js";

export default class ShelfModel extends AbstractModel {
  constructor({ id = null, name = "" } = {}) {
    super();
    this.id = id;
    this.name = name;
  }
}
