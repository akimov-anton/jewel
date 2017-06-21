'use strict';

const authentication = require('feathers-authentication');

const local = require('feathers-authentication-local');
const jwt = require('feathers-authentication-jwt');


module.exports = function () {
  const app = this;

  let config = app.get('auth');

  app.configure(authentication(config))
    .configure(local())
    .configure(jwt());

  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(['jwt', 'local'])
      ]
    }
  });
};
