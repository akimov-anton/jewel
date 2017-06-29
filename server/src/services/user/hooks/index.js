'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
// const auth = require('feathers-authentication').hooks;

const auth = require('feathers-authentication');
const local = require('feathers-authentication-local');
const {
  queryWithCurrentUser,
  restrictToOwner
} = require('feathers-authentication-hooks');

exports.before = {
  all: [],
  find: [
    // auth.hooks.authenticate('jwt'),
    // queryWithCurrentUser()
  ],
  get: [
    // auth.hooks.authenticate('jwt'),
    // restrictToOwner({ ownerField: '_id' })
  ],
  create: [
    local.hooks.hashPassword()
  ],
  update: [
    auth.hooks.authenticate('jwt'),
    restrictToOwner({ ownerField: '_id' }),
    // local.hooks.hashPassword()
  ],
  patch: [
    auth.hooks.authenticate('jwt'),
    restrictToOwner({ ownerField: '_id' }),
    local.hooks.hashPassword()
  ],
};

exports.after = {
  all: [hooks.remove('password')],
//   find: [],
//   get: [],
//   create: [],
//   update: [],
//   patch: [],
//   remove: []
};
