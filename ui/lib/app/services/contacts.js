
var pagesEndpoint = require('./pages-endpoint');

var pack = {};

pack.get = function () {
  return pagesEndpoint.getPage('contacts');
};

module.exports = pack;