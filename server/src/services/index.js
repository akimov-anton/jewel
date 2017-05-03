'use strict';
const pageCategories = require('./pageCategories');
const pages = require('./pages');
const itemSpecifics = require('./itemSpecifics');
const itemTypes = require('./itemTypes');
const collections = require('./collections');
const items = require('./items');
const authentication = require('./authentication');
const user = require('./user');
const uploads = require('./uploads');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(items);
  app.configure(collections);
  app.configure(itemTypes);
  app.configure(itemSpecifics);
  app.configure(uploads);
  app.configure(pages);
  app.configure(pageCategories);
};
