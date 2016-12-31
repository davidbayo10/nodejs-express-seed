'use strict';

module.exports = function (app, rootDir) {
  require('./express')(app);
  require('./mongoose-model-loader')(rootDir);
};
