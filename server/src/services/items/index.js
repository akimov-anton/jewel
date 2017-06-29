'use strict';

const service = require('feathers-mongoose');
const items = require('./items-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: items,
    paginate: {
      default: 50,
      max: 250
    },
  };

  // Initialize our service with any options it requires
  app.use('/items', service(options));

  // Get our initialize service to that we can bind hooks
  const itemsService = app.service('/items');

  // Set up our before hooks
  itemsService.before(hooks.before);

  // Set up our after hooks
  itemsService.after(hooks.after);
};
