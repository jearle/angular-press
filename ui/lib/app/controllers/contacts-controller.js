
var app = require('../app');

var contacts = require('../services/contacts');

var name = 'ContactsController';
var deps = [
  '$scope'
];

function ContactsController ($scope) {

  $scope.page;

  contacts.get()
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

deps.push(ContactsController);

app.controller(name, deps);