
var app = require('../app');

var about = require('../services/about');

var name = 'HomeController';
var deps = [
  '$scope'
];

function HomeController ($scope) {

  $scope.page;

  about.get()
    .then(
      function (data) {
        $scope.page = data.data.page;
        $scope.$apply();
      },
      function (err) {
        throw new Error(err);
      }
    );
}

deps.push(HomeController);

app.controller(name, deps);