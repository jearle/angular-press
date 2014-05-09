
var path = require('path');

var gulp = require('gulp');

var tinylr = require('tiny-lr');

var lr = tinylr();
lr.listen(35729);

/**
 * Tasks
 */

gulp.task('watch', function () {

  gulp.watch(
    [
      'lib/**/*',
      'index.html'
    ], 
    [
      'browserify', 
      'livereload'
    ]
  );

});

gulp.task('livereload', ['browserify'], function () {

  lr.changed({
    body: {
      files: 'build/dev.js'
    }
  });

});

require('./tasks/browserify');
require('./tasks/serve');

gulp.task('default', [
  'browserify',
  'livereload',
  'serve',
  'watch'
]);
