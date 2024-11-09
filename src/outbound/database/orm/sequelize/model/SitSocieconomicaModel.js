import { DataTypes } from "sequelize";
import AbstractModel from "./AbstractModel.js";
import PacienteModel from "./PacienteModel.js";

export default class SitSocieconomicaModel extends AbstractModel {
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
        recebe_beneficio: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        aposentado: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        desempregado: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        moradia: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        renda_per_capita: {
          type: DataTypes.STRING,
          allowNull: false,
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
        modelName: "SitSocieconomica",
        tableName: "Sit_socieconomica",
        underscored: true,
      },
    });
  }
}
