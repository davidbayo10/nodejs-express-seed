'use strict';
const userController = require('../src/user/user.controller');
function userRouter(app) {
  const router = require('co-express-router')();
  router.get('/api/user/:id', userController.get);

  app.use(router);
}

module.exports = userRouter;
