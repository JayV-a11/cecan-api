'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Sit_socieconomica', {
      fields: ['paciente_id'],
      type: 'foreign key',
      name: 'paciente_sit_association',
      references: {
        table: 'Pacientes',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Sit_socieconomica', {
      fields: ['paciente_id'],
      type: 'foreign key',
      name: 'paciente_sit_association',
      references: {
        table: 'Pacientes',
        field: 'id'
      }
    })
  }
};
