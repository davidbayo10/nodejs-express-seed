const co = require('co');
const { GraphQLNonNull } = require('graphql');
const userBll = require('../../src/user/user.bll');
const { userInputType, userType } = require('../types');

const create = {
  type: userType,
  args: {
    user: {
      name: 'UserData',
      description: 'User data for creating new user',
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve: co.wrap(function * (root, { user }) {
    const newUser = {
      personalInfo: {
        name: user.name,
        surname: user.surname
      },
      contactInfo: {
        email: user.email
      },
      credentials: {
        username: user.username,
        password: user.password
      }
    };

    return yield userBll.create(newUser);
  })
};

module.exports = {
  createUser: create
};