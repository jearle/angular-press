
var angularInjector = require('./angular-injector');

var pack = {};

pack.assignPosts = function ($scope, service) {
  $scope.posts;

  function onResponse (response) {
    $scope.posts = response.data;
    $scope.$apply();
  }

  service
    .get()
    .then(onResponse);
};

module.exports = pack;