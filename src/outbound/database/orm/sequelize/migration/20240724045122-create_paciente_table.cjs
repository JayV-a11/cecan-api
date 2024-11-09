"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pacientes", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sus: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      convenio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado_civil: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      escolaridade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contato: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.UUID,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pacientes');
  },
};
