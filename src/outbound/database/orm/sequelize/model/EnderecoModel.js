import { DataTypes } from "sequelize";
import AbstractModel from "./AbstractModel.js";
import PacienteModel from "./PacienteModel.js";

export default class EnderecoModel extends AbstractModel {
  static init() {
    return super.init({
      attributes: {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          autoIncrement: false,
        },
        paciente_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        cep: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        rua: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        numero: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cidade: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        estado: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        complemento: {
          type: DataTypes.STRING,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      options: {
        modelName: "Endereco",
        tableName: "Enderecos",
        underscored: true,
      },
    });
  }
}
