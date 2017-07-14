'use strict';

const service = require('feathers-mongoose');
const itemAttributes = require('./itemAttributes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: itemAttributes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/itemAttributes', service(options));

  // Get our initialize service to that we can bind hooks
  const itemAttributesService = app.service('/itemAttributes');

  // Set up our before hooks
  itemAttributesService.before(hooks.before);

  // Set up our after hooks
  itemAttributesService.after(hooks.after);
};
