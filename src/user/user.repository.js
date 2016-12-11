'use strict';
const mongoose = require('mongoose');
const userModel = mongoose.model('User');

exports.get = function () {
  return userModel.find().lean().exec();
};

exports.getById = function (userId) {
  const query = {
    _id: userId,
  };
  return userModel.findOne(query).lean().exec();
};

exports.getByUsername = function (username) {
  const query = {
    'credentials.username': username,
  };

  return userModel.findOne(query).lean().exec();
};

exports.getByEmail = function (userEmail) {
  const query = {
    'contactInfo.email': userEmail,
  };

  return userModel.findOne(query).lean().exec();
};

exports.create = function (user) {
  return userModel.create(user);
};

exports.update = function (user) {
  const query = {
    _id: user._id,
  };

  return userModel.findOneAndUpdate(query, user).lean().exec();
};
