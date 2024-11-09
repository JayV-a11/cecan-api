'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'Users',
            {
                id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    autoIncrement: false,
                    primaryKey: true
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                login: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                created_at: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false
                },
                updated_at: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false
                }
            }
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
}