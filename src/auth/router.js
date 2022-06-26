'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const basicAuth = require('./middleware/basic');
const { UsersModel } = require('./models');

router.post('/signup', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 7);
        const result = await UsersModel.create(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(403).send('Error creating user'); }
});

router.post('/signin', basicAuth, async (req, res) => {
    res.status(200).json(req.user);
})

module.exports = router;
