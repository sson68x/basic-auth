'use strict';

const error404Handler = function error404Handler(req, res, next) {
    res.status(404).send('Not Found');
}

module.exports = error404Handler;
