'use strict';

module.exports = function (app) {
  require('./api')(app);

  // Handle error at the end of all app.use
  require('../config/middleware/handle-error')(app);
};
