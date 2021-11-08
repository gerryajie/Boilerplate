'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  WorkingDay.init({
    weekDay: DataTypes.STRING,
    workingDate: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'WorkingDay',
  });

  WorkingDay.associate = function(models) {
    WorkingDay.belongsToMany(models.User, {
      through: "UsersWorkingDays",
      foreignKey: "workingDayId",
      as: "employees"
    })
  }

  // untuk relasi many to many kita perlu kasih definisi
  // di model User kita kasih belongsToMany.WorkingDay
  // di model WorkingDay kita kasih belongsToMany.User
  // di model penghubungnya (UsersWorkingDay) kita kasih UsersWorkingDay.belongsTo User
  // di model penghubungnya (UsersWorkingDay) kita kasih UsersWorkingDay.belongsTo WorkingDay
  return WorkingDay;
};