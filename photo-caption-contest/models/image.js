'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      // Associate Image with User (Each Image belongs to a User)
      Image.belongsTo(models.User, {
        foreignKey: 'userId', // Foreign key in Image table
        onDelete: 'CASCADE' // If a User is deleted, delete associated Images
      });
    }
  }

  Image.init({
    filename: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });

  return Image;
};
