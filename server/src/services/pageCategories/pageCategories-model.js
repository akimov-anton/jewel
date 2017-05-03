'use strict';

// pageCategories-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageCategoriesSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const pageCategoriesModel = mongoose.model('pageCategories', pageCategoriesSchema);

module.exports = pageCategoriesModel;
