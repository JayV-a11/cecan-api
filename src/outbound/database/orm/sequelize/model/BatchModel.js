import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';
import MedicineModel from './MedicineModel.js';
import ShelfModel from './ShelfModel.js';

export default class BatchModel extends AbstractModel {
    static init() {
        return super.init(
            {
                attributes: {
                    id: {
                        type: DataTypes.UUID,
                        primaryKey: true,
                        defaultValue: DataTypes.UUIDV4,
                        allowNull: false,
                        autoIncrement: false,
                    },
                    medicineId: {
                        type: DataTypes.UUID,
                        allowNull: false
                    },
                    shelfId: {
                        type: DataTypes.UUID,
                        allowNull: false
                    },
                    pharmaceutical: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    number: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    quantity: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    discarded: {
                        type: DataTypes.BOOLEAN,
                    },
                    expiration: {
                        type: DataTypes.DATE
                    },
                    createdAt: {
                        type: DataTypes.DATE
                    },
                    updatedAt: {
                        type: DataTypes.DATE
                    }
                }, 
                options: {
                    modelName: 'Batch',
                    tableName: 'Batches',
                    underscored: true
                }
            }
        );
    }

    static associate() {
        this.belongsTo(MedicineModel, { foreignKey: 'medicineId', as: 'medicine' });
        this.belongsTo(ShelfModel, { foreignKey: 'shelfId', as: 'shelf' });
    }
}

