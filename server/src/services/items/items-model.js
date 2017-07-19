'use strict';

// items-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const itemsSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  benefits: {type: String},
  customer_care: {type: String},
  price: {type: Number, required: true},
  collectionId: {type: ObjectId, ref: 'collections'},
  attributes: [{id: ObjectId, options: [{name: String, imgLink: String}]}],
  imgs: [String],
  images: [String],
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;
