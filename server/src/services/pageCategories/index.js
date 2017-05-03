'use strict';

const service = require('feathers-mongoose');
const pageCategories = require('./pageCategories-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: pageCategories,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/pageCategories', service(options));

  // Get our initialize service to that we can bind hooks
  const pageCategoriesService = app.service('/pageCategories');

  // Set up our before hooks
  pageCategoriesService.before(hooks.before);

  // Set up our after hooks
  pageCategoriesService.after(hooks.after);
};
