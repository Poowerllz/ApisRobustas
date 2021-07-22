const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('tasks', {
        id: {
          type: sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        task: {
          type: sequelize.STRING,
          allowNull: false,
        },
        check:{
          type: sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDELETE: 'SET NULL',
          allowNull: false,
        },
        created_at:{
          type: sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: sequelize.DATE,
          allowNull: false,
        }
       });

  },

  down: async (queryInterface) => {
   await queryInterface.dropTable('tasks');
  }
};
