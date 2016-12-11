'use strict';
const logger = require('log4js').getLogger();

function createError(type, message, data) {
  const stack = new Error().stack;
  return {
    type: type,
    message: message,
    data: data,
    stack: stack,
  };
}

exports.create = createError;

function throwError(flag, message, type, data) {
  type = type || 400;
  data = data || {};
  if (flag) {
    throw createError(type, message, data);
  }
}

exports.throwErrorIf = throwError;

exports.throwErrorIfNot = function (flag, message, type, data) {
  return throwError(!flag, message, type);
};
