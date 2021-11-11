'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Company.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  Company.associate = function(models) {
    // Company.hasMany(models.User, { as: 'employees' })
  }

  // untuk relasi one to many kita perlu kasih definisi
  // di tabel User kita kasih belongsTo.Company
  // di tabel Company kita kasih hasMany User
  return Company;
};