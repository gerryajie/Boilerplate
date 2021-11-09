'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {

    static associate(models) {
      // Picture.belongsTo(models.User)
    }
  };
  Picture.init({
    caption: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};