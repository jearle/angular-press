
var jobs = require('../services/jobs');
var PostController = require('../classes/post-controller');

new PostController('JobsController', jobs)
  .inject();