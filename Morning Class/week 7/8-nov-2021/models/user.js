'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User.hasMany(models.Picture)
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  // User.beforeCreate(async (user, option) => {
  //   console.log(user, "<<<< USER")
  //   console.log(option, "<<<< OPTION")
  // })
  return User;
};