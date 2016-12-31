'use strict';
const userBll = require('./user.bll');

exports.get = function* (req, res) {
  const users = yield userBll.get();
  res.send(users);
};

exports.create = function* (req, res) {
  let user = req.body;
  user = yield userBll.create(user);
  res.send(user);
};
