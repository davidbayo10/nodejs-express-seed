'use strict';

const userController = require('../../src/user/user.controller');
function getUserRouter() {
  const router = require('co-express-router')();
  router.get('/users/:id', userController.get);
  router.post('/users', userController.create);

  return router;
}

module.exports = getUserRouter;
