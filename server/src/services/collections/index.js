'use strict';

const service = require('feathers-mongoose');
const collections = require('./collections-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: collections,
    paginate: {
      default: 20,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/collections', service(options));

  // Get our initialize service to that we can bind hooks
  const collectionsService = app.service('/collections');

  // Set up our before hooks
  // collectionsService.before(hooks.before);
  //
  // // Set up our after hooks
  collectionsService.after(hooks.after);
};
