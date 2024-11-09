import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';

export default class CadastroModel extends AbstractModel {
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
                    nome_paciente: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    status: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    createdAt: {
                        type: DataTypes.DATE
                    },
                    updatedAt: {
                        type: DataTypes.DATE
                    }
                }, 
                options: {
                    modelName: 'Cadastro',
                    tableName: 'Cadastros',
                    underscored: true
                }
            }
        );
    }
}
