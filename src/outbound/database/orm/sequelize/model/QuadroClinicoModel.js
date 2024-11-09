import { DataTypes } from "sequelize";
import AbstractModel from "./AbstractModel.js";
import PacienteModel from "./PacienteModel.js";

export default class QuadroClinicoModel extends AbstractModel {
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
        recidiva: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        metastase: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        realizou_cirurgia: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        realiza_exames_prevencao: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        realiza_tratamento_outras_doencas: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        local_tratamento: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        medico_responsavel: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        data_diagnostico: {
          type: DataTypes.DATE,
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
        modelName: "QuadroClinico",
        tableName: "Quadros_clinicos",
        underscored: true,
      },
    });
  }
}
