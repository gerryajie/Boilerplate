'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cars', [
      {
        type: 'Avanza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Innova',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Ferrari',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Lambo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Brio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Fortuner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Pajero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Xpander',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Mini Cooper',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Alphard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Ertiga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Ayla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Agya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Karimun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Jazz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Yaris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Carry',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Kijang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Palisade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Bugatti',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Freed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Baleno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Civic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Tesla',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Atoz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Serena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cars', null, {});
  }
};
