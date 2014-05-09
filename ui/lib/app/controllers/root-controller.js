
var app = require('../app');

var name = 'RootController';
var deps = [
  '$scope',
  '$state'
];

function RootController ($scope, $state) {

}

deps.push(RootController);

app.controller(name, deps);
