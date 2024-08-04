import AbstractModel from './AbstractModel.js';

export default class MedicineModel extends AbstractModel {
    constructor ({
        id = null,
        code = '',
        commercialName = '',
        genericName = '',
        dosage = 0,
        unitOfMeasurement = '',
    } = {}) {
        super();
        this.id = id;
        this.code = code,
        this.commercialName = commercialName;
        this.genericName = genericName;
        this.dosage = dosage;
        this.unitOfMeasurement = unitOfMeasurement;
    }

}