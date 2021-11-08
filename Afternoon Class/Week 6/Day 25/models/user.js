'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = function(models) {
    // User.belongsTo(models.Company, { foreignKey: "companyId" })
    User.belongsToMany(models.WorkingDay, { through: "UsersWorkingDays", foreignKey: "userId", as: "days" })
  }

  // untuk relasi one to many kita perlu kasih definisi
  // di model User kita kasih belongsTo.Company
  // di model Company kita kasih hasMany User

  // untuk relasi many to many kita perlu kasih definisi
  // di model User kita kasih belongsToMany.WorkingDay
  // di model WorkingDay kita kasih belongsToMany.User
  // di model penghubungnya (UsersWorkingDay) kita kasih UsersWorkingDay.belongsTo User
  // di model penghubungnya (UsersWorkingDay) kita kasih UsersWorkingDay.belongsTo WorkingDay
  return User;
};