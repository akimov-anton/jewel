'use strict';

const service = require('feathers-mongoose');
const items = require('./items-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: items,
    paginate: {
      default: 5,
      max: 25
    },
  };

  // class ItemsService {
  //   constructor() {
  //     this.items = [];
  //   }
  //
  //   find(params) {
  //
  //   }
  //
  //   // create(data, params) {
  //   //   this.messages.push(data);
  //   //
  //   //   return Promise.resolve(data);
  //   // }
  // }

  // Initialize our service with any options it requires
  app.use('/items', service(options));

  // Get our initialize service to that we can bind hooks
  const itemsService = app.service('/items');

  // Set up our before hooks
  itemsService.before(hooks.before);

  // Set up our after hooks
  itemsService.after(hooks.after);

  // get(id, params) {
  //   return Promise.resolve({
  //     id,
  //     read: false,
  //     text: `Feathers is great!`,
  //     createdAt: new Date().getTime()
  //   });
};
