
var angular = require('angular');
var uiRouter = require('../../vendor/angular-ui/angular-ui-router');

require('../../vendor/angular/angular-sanitize');
require('../../vendor/angular/angular-animate');

var name = 'jeJesseEarle';

var deps = [
  uiRouter,
  'ngSanitize',
  'ngAnimate'
];

function config ($stateProvider, $urlRouterProvider) {

  var home = {
    name: 'home',
    url: '/',
    template: require('./views/home.jade')(),
    controller: 'HomeController'
  };

  var jobs = {
    name: 'jobs',
    url: '/jobs',
    template: require('./views/jobs.jade')(),
    controller: 'JobsController'
  };

  var work = {
    name: 'works',
    url: '/works',
    template: require('./views/works.jade')(),
    controller: 'WorksController'
  };

  var projects = {
    name: 'projects',
    url: '/projects',
    template: require('./views/projects.jade')(),
    controller: 'ProjectsController'
  };

  var words = {
    name: 'words',
    url: '/words',
    template: require('./views/words.jade')(),
    controller: 'WordsController'
  };

  var contacts = {
    name: 'contacts',
    url: '/contacts',
    template: require('./views/contacts.jade')(),
    controller: 'ContactsController'
  };

  $stateProvider
    .state(home)
    .state(work)
    .state(jobs)
    .state(projects)
    .state(words)
    .state(contacts);

  $urlRouterProvider
    .otherwise('/');
}


var app = angular.module(name, deps);

app.config(config);

module.exports = app;