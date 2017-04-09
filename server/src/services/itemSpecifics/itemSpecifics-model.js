'use strict';

// itemSpecifics-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSpecificsSchema = new Schema({
  name: {type: String, required: true},
  fields: [],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const itemSpecificsModel = mongoose.model('itemSpecifics', itemSpecificsSchema);

module.exports = itemSpecificsModel;
