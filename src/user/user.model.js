'use strict';
const user = {
  personalInfo: {
    name: String,
    surname: String,
  },
  contactInfo: {
    email: {
      type: String,
      required: true,
    },
  },
  credentials: {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  roles: {
    subroles: [
      {
        type: String,
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};

module.exports = user;
