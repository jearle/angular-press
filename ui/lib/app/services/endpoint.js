
var injector = require('../helpers/angular-injector');
var contants = require('./constants');

var $http = injector.get('$http');

var pack = {};

function assembleUrl (endPoint) {
  return contants.domain() + endPoint;
}

pack.get = function (url) {
  return $http.get(assembleUrl(url));
};

pack.getJson = function (url) {
  return pack.get(url + '/?json=1');
}

module.exports = pack;