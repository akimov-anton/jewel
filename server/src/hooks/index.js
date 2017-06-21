'use strict';

// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.Log = function(options) {
  return function(hook) {
    console.log('My custom global hook ran. Feathers is awesome!');
  };
};

exports.addId = (options) => {
  return (hook) => {
    if (hook.result.data && hook.result.data.length) {
      hook.result = hook.result.data.map(item => {
        item.id = item._id.toHexString();
        delete item._id;
        return item;
      });
    } else {
      if (hook.result._id) {
        hook.result.id = hook.result._id.toHexString();
        delete hook.result._id;
      }
    }
  }
};
