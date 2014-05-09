
var endpoint = require('./endpoint');

var pack = {};

pack.getCategory = function (category) {
  return endpoint.getJson('category/' + category);
};

module.exports = pack;