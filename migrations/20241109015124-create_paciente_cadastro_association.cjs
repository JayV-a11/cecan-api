'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Pacientes', {
      fields: ['codigo'],
      type: 'foreign key',
      name: 'paciente_cadastro_association',
      references: {
        table: 'Cadastros',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Pacientes', {
      fields: ['codigo'],
      type: 'foreign key',
      name: 'paciente_cadastro_association',
      references: {
        table: 'Cadastros',
        field: 'id'
      }
    })
  }
};
