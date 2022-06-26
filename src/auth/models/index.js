'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const usersSchema = require('./users-model');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/api-auth-app';

// const sequelize = new Sequelize(DATABASE_URL);

// For deploying
const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
        rejectUnauthorized: false,
    }
  }
});

const UsersModel = usersSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  UsersModel
};
