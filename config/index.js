'use strict';

module.exports = function (app, rootDir) {
  require('./mongoose-model-loader')(rootDir);
  require('./express')(app);
};