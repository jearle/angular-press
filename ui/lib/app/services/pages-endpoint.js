
var endpoint = require('./endpoint');

var pack = {};

pack.getPage = function (page) {
  return endpoint.getJson(page);
};

module.exports = pack;