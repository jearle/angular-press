
var app = require('../app');

var name = 'jePosts'
var deps = [];

var scope = {
  jePosts: '='
};

function linker ($scope, element, attributes) {

  $scope.hidden = true;

  function determineHiddenState () {
    if (hasPosts())
      $scope.hidden = false;
    else 
      $scope.hidden = true;
  }

  function hasPosts () {
    return !!$scope.jePosts;
  }

  function onJePostsChange () {
    determineHiddenState();
  }

  function onHiddenChange () {
    if ($scope.hidden)
      element.fadeOut();
    else
      element.fadeIn();
  }

  $scope.$watch('hidden', onHiddenChange)
  $scope.$watch('jePosts', onJePostsChange);

}

function provider () {

  return config;
}

var config = {
  scope: scope,
  template: require('../views/directives/posts.jade')(),
  link: linker
};

deps.push(provider);

app.directive(name, deps);