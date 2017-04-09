'use strict';

const service = require('feathers-mongoose');
const itemSpecifics = require('./itemSpecifics-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: itemSpecifics,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/itemSpecifics', service(options));

  // Get our initialize service to that we can bind hooks
  const itemSpecificsService = app.service('/itemSpecifics');

  // Set up our before hooks
  itemSpecificsService.before(hooks.before);

  // Set up our after hooks
  itemSpecificsService.after(hooks.after);
};
