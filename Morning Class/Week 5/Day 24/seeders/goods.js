const faker = require('faker');
const { good, supplier } = require('../models');

// Seeder add
exports.addGoods = async () => {
  const suppliers = await supplier.find();

  for (let i = 0; i < 10; i++) {
    await good.create({
      name: faker.commerce.productName(),
      price: faker.commerce.price() * 14000,
      supplier: suppliers[Math.floor(Math.random() * suppliers.length)]._id,
      photo: faker.image.imageUrl(),
    });
  }

  console.log('Goods have been added');
};

// Seeder undo
exports.deleteGoods = async () => {
  await good.remove();

  console.log('Goods have been deleted');
};
