'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to customers
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
    await queryInterface.bulkDelete('customers', null, {});
  },
};
