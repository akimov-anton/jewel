'use strict';

// collections-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const collectionsSchema = new Schema({
  name: {type: String, required: true},
  subCollection: {type: ObjectId, ref: 'collections', required: false},
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

const collectionsModel = mongoose.model('collections', collectionsSchema);

module.exports = collectionsModel;
