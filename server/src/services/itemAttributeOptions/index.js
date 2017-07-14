'use strict';

const service = require('feathers-mongoose');
const itemAttributeOptions = require('./itemAttributeOptions-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: itemAttributeOptions,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/itemAttributeOptions', service(options));

  // Get our initialize service to that we can bind hooks
  const itemAttributeOptionsService = app.service('/itemAttributeOptions');

  // Set up our before hooks
  itemAttributeOptionsService.before(hooks.before);

  // Set up our after hooks
  itemAttributeOptionsService.after(hooks.after);
};
