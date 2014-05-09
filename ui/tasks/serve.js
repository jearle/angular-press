
var gulp = require('gulp');
var express = require('express');

var publicPath = __dirname + '/../';

gulp.task('serve', function () {

  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(publicPath));
  app.listen(5000);

});