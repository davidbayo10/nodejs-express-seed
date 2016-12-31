'use strict';

const mongoose = require('mongoose-model-loader');

module.exports = (rootDir) => {
  mongoose.loaderSync({
    sourcePath: `${rootDir}/src`,
    fileExtension: '.model.js',
    db: require('./database')(process.env.NODE_ENV),
  });
};
