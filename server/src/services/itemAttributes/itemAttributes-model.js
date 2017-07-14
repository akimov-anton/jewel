'use strict';

// itemAttributes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const itemAttributesSchema = new Schema({
  name: { type: String, required: true },
  options: [String],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const itemAttributesModel = mongoose.model('itemAttributes', itemAttributesSchema);

module.exports = itemAttributesModel;
