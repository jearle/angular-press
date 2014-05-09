
var app = require('../app');

var name = 'jePage';
var template = require('../views/directives/page.jade')();
var deps = [];

var scope = {
  jePage: '='
};

function linker ($scope, element, attributes) {

  $scope.hidden = true;

  function determineHiddenState () {
    if (hasPage())
      $scope.hidden = false;
    else 
      $scope.hidden = true;
  }

  function hasPage () {
    return !!$scope.jePage;
  }

  function onJePageChange () {
    console.log($scope.jePage);
    determineHiddenState();
  }

  function onHiddenChange () {
    if ($scope.hidden)
      element.fadeOut();
    else
      element.fadeIn();
  }

  $scope.$watch('hidden', onHiddenChange)
  $scope.$watch('jePage', onJePageChange);
  
}

function provider () {

  return config;
}

var config = {
  scope: scope,
  template: template,
  link: linker
};

deps.push(provider);

app.directive(name, deps);