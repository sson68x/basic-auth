'use strict';

const express = require('express');
const error404Handler = require('./middleware/404');
const error500Handler = require('./middleware/500');
const usersRoute = require('./auth/router');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoute);

app.use('*', error404Handler);
app.use(error500Handler);

module.exports = {
    server: app,
    start: () => app.listen(3001, console.log('server running on', PORT)),
};
