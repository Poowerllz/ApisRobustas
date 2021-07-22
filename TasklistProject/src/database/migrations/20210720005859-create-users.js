const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('users', {
        id: {
          type: sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: sequelize.STRING,
          allowNull: false,
        },
        email:{
          type: sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password_hash: {
          type: sequelize.STRING,
          allowNull: false.valueOf,
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

   await queryInterface.dropTable('users');

  }
};
