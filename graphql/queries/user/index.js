const multipleUserQuery = require('./multiple');
const singleUserQuery = require('./single');

module.exports = {
  user: singleUserQuery,
  users: multipleUserQuery
};