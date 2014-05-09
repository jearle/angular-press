
var pagesEndpoint = require('./pages-endpoint');

var pack = {};

pack.get = function () {
  return pagesEndpoint.getPage('about');
};

module.exports = pack;