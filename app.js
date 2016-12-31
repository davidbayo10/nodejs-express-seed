'use strict';

const app = require('express')();

const logger = require('log4js').getLogger('Running');

const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

require('./config')(app, __dirname);

if (module.parent) {
  return;
}

require('./routes')(app);

app.listen(port, () => {
  logger.debug(`Environment: ${environment}`);
  logger.debug(`App listening on port ${port}`);
});

exports.app = app;
