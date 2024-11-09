'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Quadros_clinicos', {
      fields: ['paciente_id'],
      type: 'foreign key',
      name: 'paciente_quadro_association',
      references: {
        table: 'Pacientes',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Quadros_clinicos', {
      fields: ['paciente_id'],
      type: 'foreign key',
      name: 'paciente_quadro_association',
      references: {
        table: 'Pacientes',
        field: 'id'
      }
    })
  }
};
