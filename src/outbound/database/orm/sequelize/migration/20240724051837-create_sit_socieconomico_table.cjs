'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Sit_socieconomica", {
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
      recebe_beneficio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      aposentado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      desempregado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      moradia: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      apoio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      renda_per_capita: {
        type: Sequelize.STRING,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Sit_socieconomica');
  }
};
