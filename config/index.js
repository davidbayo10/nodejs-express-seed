'use strict';

module.exports = function (app) {
  require('./express')(app);
  require('./routes')(app);
};
