'use strict';
const faker = require('faker'); // Import faker

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('goods', [
      {
        name: faker.commerce.productName(), // Generate product name
        price: faker.commerce.price() * 14000, // Generate price
        id_supplier: 1,
        image: faker.image.imageUrl(), // Generate image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.commerce.productName(),
        price: faker.commerce.price() * 14000,
        id_supplier: 2,
        image: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.commerce.productName(),
        price: faker.commerce.price() * 14000,
        id_supplier: 3,
        image: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('goods', null, {});
  },
};
