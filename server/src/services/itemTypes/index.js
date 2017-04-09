'use strict';

const service = require('feathers-mongoose');
const itemTypes = require('./itemTypes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: itemTypes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/itemTypes', service(options));

  // Get our initialize service to that we can bind hooks
  const itemTypesService = app.service('/itemTypes');

  // Set up our before hooks
  itemTypesService.before(hooks.before);

  // Set up our after hooks
  itemTypesService.after(hooks.after);
};
