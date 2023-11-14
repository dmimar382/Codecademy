'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Associate User with Image (Each User can have multiple Images)
      User.hasMany(models.Image, {
        foreignKey: 'userId', // Foreign key in Image table
        onDelete: 'CASCADE' // If a User is deleted, delete associated Images
      });
    }
  }

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
