'use strict';

const app = require('express')();
const mongooseLoader = require('mongoose-model-loader');
const logger = require('log4js').getLogger('Running');

const db = require('./config/database');
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

mongooseLoader.loader({
  sourcePath: `${__dirname}/src`,
  fileExtension: '.model.js',
  db: 'localhost/cupula-test',
})
  .then(() => {
    require('./config')(app);
    app.listen(port, () => {
      logger.debug(`Environment: ${environment}`);
      logger.debug(`App listening on port ${port}`);
    });
  })
  .catch(err => {
    logger.fatal(err);
    logger.fatal(err.stack);
    process.exit(err.code || 1);
  });
