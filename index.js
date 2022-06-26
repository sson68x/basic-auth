'use strict';

const { sequelize } = require('./src/auth/models')
const { start } = require('./src/server');

sequelize.sync()
    .then(() => console.log('Successful Connection!'))
    .catch((e) => console.log(e));

start();
