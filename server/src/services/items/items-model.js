'use strict';

// items-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const itemsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  collectionId: { driver: ObjectId},
  imgs: [String],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

// Duplicate the ID field.
itemsSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
itemsSchema.set('toJSON', {
  virtuals: true
});

itemsSchema.set('toObject', {
  virtuals: true
});

const itemsModel = mongoose.model('items', itemsSchema);

module.exports = itemsModel;
