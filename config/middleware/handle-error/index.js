'use strict';
const logger = require('log4js').getLogger('Middleware:Handle-error');
const messages = require('./error-messages');

module.exports = function (app) {
  app.use((err, req, res, next) => {
    const type = err.type || 500;
    const message = messages[err.message] || err.message;
    logger.error(`[HTTP:${type}]`, req.method, req.url);
    logger.error(req.headers['user-agent']);
    logger.error(message);
    logger.error(err.stack || err);
    res.status(type).send(message);
  });
};
