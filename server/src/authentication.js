const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');


const util = require('util');

module.exports = function () {
  const app = this;
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local(config.local));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
        function (hook) {
          console.log(hook.params.headers);
          if (hook.params.authenticated) {
            let user = hook.params.user;
            if (!user.active && hook.params.headers.referer.includes('token')) {
              user.active = true;
              app.service('/users').update(hook.params.payload.userId, user);
            }
          }
          return hook;
        }
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });

  // app.post('/login', authentication.express.authenticate('local', { successRedirect: '/app', failureRedirect: '/login' }));
};
