const faker = require('faker');
const { customer } = require('../models');

// Seeder add
exports.addCustomers = async () => {
  for (let i = 0; i < 10; i++) {
    await customer.create({ name: faker.name.findName() });
  }

  console.log('Customers have been added');
};

// Seeder undo
exports.deleteCustomers = async () => {
  await customer.remove();

  console.log('Customers have beend deleted');
};
