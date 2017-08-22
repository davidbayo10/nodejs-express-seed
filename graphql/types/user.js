const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} = require('graphql');

const personalInfoType = new GraphQLObjectType({
  name: 'PersonalInfo',
  description: 'User personal info',
  fields: {
    name: {
      type: GraphQLString
    },
    surname: {
      type: GraphQLString
    }
  }
});

const contactInfoType = new GraphQLObjectType({
  name: 'ContactInfo',
  description: 'User contact info',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const credentialsType = new GraphQLObjectType({
  name: 'Credentials',
  description: 'User credentials',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const rolesType = new GraphQLObjectType({
  name: 'Roles',
  description: 'User roles',
  fields: {
    isAdmin: {
      type: GraphQLBoolean
    }
  }
});

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User api',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    personalInfo: {
      type: personalInfoType
    },
    contactInfo: {
      type: contactInfoType
    },
    credentials: {
      type: credentialsType
    },
    roles: {
      type: rolesType
    }
  }
});

const userInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Data for creating user',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    surname: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

module.exports = {
  userType,
  userInputType
};