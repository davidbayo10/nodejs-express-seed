const co = require('co');
const { GraphQLList } = require('graphql');
const { userType } = require('../../types');
const userBll = require('../../../src/user/user.bll');

function * resolve() {
  const users = yield userBll.get();
  if (!users) {
    throw new Error('Error on fetching users...');
  }

  return users;
}

const multipleUserQuery = {
  type: new GraphQLList(userType),
  resolve: co.wrap(resolve)
};

module.exports = multipleUserQuery;