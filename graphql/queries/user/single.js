const co = require('co');
const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

const { userType } = require('../../types');
const userBll = require('../../../src/user/user.bll');

function * resolve(root, { email }) {
  return yield userBll.getByEmail(email);
}

const userQuery = {
  type: userType,
  args: {
    email: {
      name: 'Email',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: co.wrap(resolve)
};

module.exports = userQuery;