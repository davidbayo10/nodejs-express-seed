'use strict';
const appName = require('../package').name;

module.exports = (environment) => {
  switch (environment) {
    case 'production':
      return `localhost/${appName}`;
      break;
    case 'test':
      return `localhost/${appName}-test`;
      break;
    default:
      return `localhost/${appName}-development`;
  }
};
