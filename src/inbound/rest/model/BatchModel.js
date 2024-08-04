import AbstractModel from "./AbstractModel.js";

export default class BatchModel extends AbstractModel {
  constructor({
    id = null,
    medicineId = null,
    shelfId = null,
    pharmaceutical = '',
    number = '',
    quantity = 0,
    discarded = false,
    expiration = new Date(),
  } = {}) {
    super();
    this.id = id;
    this.medicineId = medicineId;
    this.shelfId = shelfId;
    this.pharmaceutical = pharmaceutical;
    this.number = number;
    this.quantity = quantity;
    this.discarded = discarded;
    this.expiration = expiration;
  }
}
