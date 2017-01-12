'use strict';
const userController = require('../src/user/user.controller');
function userRouter(app) {
  const router = require('co-express-router')();
  router.get('/api/users/:id', userController.get);
  router.post('/api/users', userController.create);

  app.use(router);
}

module.exports = userRouter;
