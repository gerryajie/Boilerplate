'use strict';
const faker = require('faker'); // Import faker

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to suppliers
    await queryInterface.bulkInsert('suppliers', [
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
    // Delete all data in suppliers
    await queryInterface.bulkDelete('suppliers', null, {});
  },
};
