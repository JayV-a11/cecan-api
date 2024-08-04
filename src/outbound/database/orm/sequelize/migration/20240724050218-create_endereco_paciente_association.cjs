'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Enderecos', {
      fields: ['paciente_id'],
      type: 'foreign key',
      name: 'paciente_endereco_association',
      references: {
        table: 'Pacientes',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Enderecos', {
      fields: ['paciente_id'],
      type: 'foreign key',
      name: 'paciente_endereco_association',
      references: {
        table: 'Pacientes',
        field: 'id'
      }
    })
  }
};
