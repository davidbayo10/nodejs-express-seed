'use strict';
const bcrypt = require('bcrypt-nodejs');
const error = require('../../helpers/error');
const userRepository = require('./user.repository');

exports.get = function* () {
  const users = yield userRepository.get();
  return users;
};

exports.getById = function* (userId) {
  const user = yield userRepository.getById(userId);
  return user;
};

exports.getByEmail = function* (userEmail) {
  const user = yield userRepository.getByEmail(userEmail);
  return user;
};

exports.getByUsername = function* (username) {
  const user = yield userRepository.getByUsername(username);
  return user;
};

exports.create = function* (user) {
  yield validate(user);
  const weakPass = user.credentials.password;
  const securePass = generateHash(weakPass);
  user.credentials.password = securePass;

  const newUser = yield userRepository.create(user);
  return newUser;
};

exports.update = function* (user) {
  yield validate(user);
  const updatedUser = yield userRepository.update(user);
  return updatedUser;
};

function* validate(user) {
  const email = user.contactInfo.email;
  const username = user.credentials.username;
  error.throwErrorIfNot(email, 'EmailRequired');
  error.throwErrorIfNot(username, 'UsernameRequired');
  error.throwErrorIfNot(user.credentials.password, 'PasswordRequired');

  let userExists = yield userRepository.getByUsername(username);
  error.throwErrorIf(userExists, 'UserAlreadyExists');

  userExists = yield userRepository.getByEmail(email);
  error.throwErrorIf(userExists, 'EmailRegistered');
}

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.generateHash = generateHash;

exports.validPassword = function validPassword(password, userPass) {
  return bcrypt.compareSync(password, userPass);
};
