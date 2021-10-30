'use strict';
const faker = require('faker'); // Import faker

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customers', [
      {
        name: faker.name.findName(), // generate random name
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {}); // Delete all customers data
  },
};
