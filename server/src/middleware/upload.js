/**
 * Created by Toha on 23.04.2017.
 */

module.exports = function(app) {
  return function(req, res, next) {
    console.log('req.file', req.file);
    console.log('req.body', req.body);
  };
};
