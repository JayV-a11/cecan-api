"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Quadros_clinicos", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      paciente_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      recidiva: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      metastase: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      realizou_cirurgia: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      realiza_exames_prevencao: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      realiza_tratamento_outras_doencas: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      local_tratamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medico_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_diagnostico: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Quadros_clinicos");
  },
};
