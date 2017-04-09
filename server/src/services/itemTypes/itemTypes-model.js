'use strict';

// itemTypes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemTypesSchema = new Schema({
  name: {type: String, required: true},
  fields: [],
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

const itemTypesModel = mongoose.model('itemTypes', itemTypesSchema);

module.exports = itemTypesModel;
