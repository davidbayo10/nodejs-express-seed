'use strict';
const appName = require('../package').name;

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return `localhost/${appName}`;
      break;
    default:
      return `localhost/${appName}-test`;
  }
};
