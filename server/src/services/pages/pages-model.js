'use strict';

// pages-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pagesSchema = new Schema({
  link: {type: String, required: true},
  name: {type: String, required: true},
  content: {type: String},
  createdAt: {type: Date, 'default': Date.now},
  updatedAt: {type: Date, 'default': Date.now}
});

const pagesModel = mongoose.model('pages', pagesSchema);

module.exports = pagesModel;
