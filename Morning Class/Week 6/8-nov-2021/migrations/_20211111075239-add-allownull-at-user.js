'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING,
      // allowNull: false
    })
  }
};
