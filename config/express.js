'use strict';
const morganLogger = require('morgan-logger');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const graphqlSechema = require('../graphql');
const graphqlHTTP = require('express-graphql');

const pkg = require('../package');
const appName = pkg.name;

module.exports = function (app) {
  require('co-express-router')(app);
  app.use(morganLogger());
  app.use(cors());
  app.use(compression());
  app.use(helmet());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookieParser());
  app.use(cookieSession({
    name: appName,
    secret: `${appName}-${pkg.version}-secret`,
    maxAge: 24 * 60 * 60 * 1000,
  }));

  app.use('/graphql', graphqlHTTP((req) => ({
    schema: graphqlSechema,
    graphiql: true,
    pretty: true
  })));
};
