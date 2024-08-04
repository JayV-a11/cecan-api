import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';

export default class PacienteModel extends AbstractModel {
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
                    nome: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    rg: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    cpf: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    nascimento: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    sus: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    convenio: {
                        type: DataTypes.BOOLEAN,
                        allowNull: false,
                        defaultValue: false
                    },
                    estado_civil: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    escolaridade: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    outro_contato: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    parentesco: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    createdAt: {
                        type: DataTypes.DATE,
                        defaultValue: DataTypes.NOW
                    },
                    updatedAt: {
                        type: DataTypes.DATE,
                        defaultValue: DataTypes.NOW
                    }
                },
                options: {
                    modelName: 'Paciente',
                    tableName: 'Pacientes',
                    underscored: true
                }
            }
        );
    }
}
