'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('items service', function() {
  it('registered the items service', () => {
    assert.ok(app.service('items'));
  });
});
