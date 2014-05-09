
var angular = require('angular');

var injector = angular.injector(['ng']);

var _pack = {};

_pack.get = function (name) {
  return injector.get(name);
};

_pack.addModule = function (names) {

  var _modules = ['ng'];

  _modules = _modules.concat(names);

  injector = angular.injector(_modules);

};

module.exports = _pack;