
var app = require('../app');

var name = 'RootController';
var deps = [
  '$scope'
];

function RootController ($scope) {

}

deps.push(RootController);

app.controller(name, deps);
