'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to goods
    await queryInterface.bulkInsert('goods', [
      {
        name: faker.commerce.productName(), // generate product name
        price: faker.commerce.price() * 14000, // generate price
        id_supplier: 1,
        image: faker.image.imageUrl(), // generate image
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
