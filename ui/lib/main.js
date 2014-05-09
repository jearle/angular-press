
require('jquery');

var angular = require('angular');
var insertCss = require('insert-css');

var css = require('./app/styles/main.styl');

insertCss(css);

var app = require('./app/app');

require('./app/controllers');
require('./app/directives');

angular.bootstrap(document.body, ['jeJesseEarle']);