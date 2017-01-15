'use strict';

module.exports = function (app) {
  const routers = [
    require('./user')(),
  ];

  for (let router of routers) {
    app.use('/api', router);
  }
};
