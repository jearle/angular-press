
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var path = require('path');

var angularPath = path.join(__dirname, '..', 'vendor/angular/angular.js');
var jqueryPath = path.join(__dirname, '..', 'vendor/jquery/jquery-1.11.0.js');
var mainPath = path.join(__dirname, '..', 'lib/main.js');
var buildPath = path.join(__dirname, '..', 'build');
var devFileName = 'dev.js';

function angularShim () {

  return {
    
    path: angularPath,
    exports: 'angular'
  
  };

}

function jqueryShim () {

  return {

    path: jqueryPath,
    exports: 'jquery'

  };

}

function allShims () {

  return {

    angular: angularShim(),
    jquery: jqueryShim()

  };

}

function options () {

  return {
    
    debug: true,

    transform: [

      'jadeify',
      'stylify'

    ],

    shim: allShims()
  
  };

}

gulp.task(
  
  'browserify', 
  
  function (done) {
    // console.log(options);
    gulp.src(mainPath)

      .pipe(
        browserify(options())
      )

      .pipe(
        rename(devFileName)
      )

      .pipe(
        gulp.dest(buildPath)
      )

      .on(
        'end',
        done
      );

  }

);