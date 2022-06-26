'use strict';

const base64 = require('base-64');
const { UsersModel } = require('../models')

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send('Not Authorized');
    } else {
        let encodedAuthString = req.headers.authorization.split(' ').pop();
        let [username, password] = base64.decode(encodedAuthString).split(':');
        try {
            req.user = await UsersModel.authenticateBasic(username, password);
            next();
        } catch (err) {
            next('Invalid login');
        }
    }
};
